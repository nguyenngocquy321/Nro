import { useState } from 'react';
import { Container, Col, Card, Form, Button } from 'react-bootstrap';
import {
    addDoc,
    collection,
    serverTimestamp,
    doc,
    runTransaction,
    setDoc,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';

function MainContents() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [imagesBase64, setImagesBase64] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNextProductId = async () => {
        const counterRef = doc(db, 'counters', 'products');

        return await runTransaction(db, async transaction => {
            const counterDoc = await transaction.get(counterRef);

            if (!counterDoc.exists()) {
                transaction.set(counterRef, { currentId: 1 });
                return 1;
            }

            const currentId = counterDoc.data().currentId || 0;
            const nextId = currentId + 1;

            transaction.update(counterRef, { currentId: nextId });

            return nextId;
        });
    };

    const convertToBase64 = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleImageChange = async e => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        for (let file of files) {
            if (file.size > 500000) {
                alert('Mỗi ảnh tối đa 500KB');
                return;
            }
        }

        try {
            const base64List = await Promise.all(
                files.map(file => convertToBase64(file))
            );

            setImagesBase64(base64List);
            setPreviews(base64List);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!title || imagesBase64.length === 0) {
            alert('Vui lòng nhập đủ thông tin');
            return;
        }

        try {
            setLoading(true);

            const newId = await getNextProductId();

            await addDoc(collection(db, 'products'), {
                productId: newId,
                title,
                images: imagesBase64,
                quantity: 0,
                url: url,
                createdAt: serverTimestamp(),
            });

            alert('Thêm sản phẩm thành công!');

            // reset
            setTitle('');
            setUrl('');
            setImagesBase64([]);
            setPreviews([]);
        } catch (error) {
            console.error(error);
            alert('Có lỗi xảy ra!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Col md={10} className='bg-light min-vh-100'>
            <Container className='mt-4'>
                <Card className='shadow-sm border-0'>
                    <Card.Body>
                        <h4 className='mb-4 fw-bold'>Thêm Sản Phẩm</h4>

                        <Form onSubmit={handleSubmit}>
                            {/* Hình ảnh */}
                            <Form.Group className='mb-4'>
                                <Form.Label className='fw-semibold'>
                                    Hình ảnh sản phẩm
                                </Form.Label>

                                <Form.Control
                                    type='file'
                                    accept='image/*'
                                    multiple
                                    onChange={handleImageChange}
                                />

                                <div className='mt-3 d-flex flex-wrap gap-3'>
                                    {previews.length > 0 ? (
                                        previews.map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt='preview'
                                                style={{
                                                    width: '150px',
                                                    height: '150px',
                                                    objectFit: 'cover',
                                                    borderRadius: '10px',
                                                }}
                                            />
                                        ))
                                    ) : (
                                        <div
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                background: '#f1f1f1',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#999',
                                            }}
                                        >
                                            Preview Images
                                        </div>
                                    )}
                                </div>
                            </Form.Group>

                            {/* Tiêu đề */}
                            <Form.Group className='mb-4'>
                                <Form.Label className='fw-semibold'>
                                    Tiêu đề sản phẩm
                                </Form.Label>

                                <Form.Control
                                    type='text'
                                    placeholder='Nhập tiêu đề sản phẩm...'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='Nhập đường dẫn sản phẩm (https://...)'
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                />
                            </Form.Group>

                            <div className='text-end'>
                                <Button
                                    type='submit'
                                    variant='primary'
                                    size='lg'
                                    disabled={loading}
                                >
                                    {loading ? 'Đang thêm...' : 'Thêm sản phẩm'}
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    );
}

export default MainContents;
