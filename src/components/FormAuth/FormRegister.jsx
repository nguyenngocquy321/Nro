import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles.module.css';
function FormRegister() {
    const { textNoAccount, btnDangNhap } = styles;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='py-4'>
            <Row className='justify-content-center'>
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Card className='shadow border-0'>
                        <Card.Body className='p-4'>
                            <h3 className='mb-4'>Đăng Ký</h3>

                            {/* Form */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='email'
                                        placeholder='Tên đăng nhập hoặc email'
                                        value={email}
                                        className='p-2'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='number'
                                        placeholder='Số điện thoại'
                                        name='phone'
                                        className='p-2'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='password'
                                        placeholder='Mật khẩu'
                                        value={password}
                                        className='p-2'
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <button
                                    type='submit'
                                    className={`${btnDangNhap} p-2`}
                                >
                                    <span>Đăng Ký</span>
                                </button>
                            </Form>

                            <div className='text-center my-3'>
                                <div className={textNoAccount}>
                                    <span>Đã có tài khoản?</span>
                                </div>
                            </div>
                            <div>
                                <Button
                                    type='submit'
                                    className='w-100 my-3 p-2'
                                >
                                    <Link
                                        to='/register'
                                        className='text-decoration-none text-white'
                                    >
                                        Đăng Nhập Ngay
                                    </Link>
                                </Button>
                            </div>
                            <div className='text-center my-3'>
                                <div className={textNoAccount}>
                                    <span>Hoặc đăng nhập qua</span>
                                </div>
                            </div>
                            <Row className='mb-3'>
                                <Col xs={6}>
                                    <Button
                                        variant='danger'
                                        className='w-100 d-flex justify-content-center align-items-center gap-2'
                                    >
                                        <FaGoogle />
                                        Google
                                    </Button>
                                </Col>

                                <Col xs={6}>
                                    <Button
                                        variant='primary'
                                        className='w-100 d-flex justify-content-center align-items-center gap-2'
                                    >
                                        <FaFacebookF />
                                        Facebook
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default FormRegister;
