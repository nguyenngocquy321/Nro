import { Card, Col, Row } from 'react-bootstrap';
import { BsHeart, BsStar } from 'react-icons/bs';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Button from '@common/Button/Button';
import { db } from '@config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
function Products() {
    const {
        btnBuy,
        textTitle,
        desc,
        containerHeart,
        overLay,
        containerCard,
        cardWrapper,
    } = styles;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, 'products'));
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(data);
        };

        fetchData();
    }, []);
    return (
        <Row xs={1} md={4} className='g-4'>
            {products.map(it => {
                return (
                    <Col key={it.id}>
                        <Card className={containerCard}>
                            <div className={cardWrapper}>
                                <Card.Img
                                    variant='top'
                                    src={it.images}
                                    alt={'lỗi ảnh'}
                                />

                                <div className={overLay}></div>

                                <div className={containerHeart}>
                                    <BsHeart />
                                </div>
                            </div>

                            <Card.Body className='d-flex flex-column text-center'>
                                <Card.Title className={textTitle}>
                                    <Link
                                        to={`/${it.url}`}
                                        className={textTitle}
                                    >
                                        {it.title}
                                    </Link>
                                </Card.Title>

                                <Card.Text className={desc}>
                                    Đã bán: {it.quantity}
                                </Card.Text>

                                <Card.Text>
                                    <BsStar color='orange' />
                                    <BsStar color='orange' />
                                    <BsStar color='orange' />
                                    <BsStar color='orange' />
                                    <BsStar color='orange' />
                                </Card.Text>

                                <Button text='Mua Ngay' link={`/${it.url}`} />
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
}
export default Products;
