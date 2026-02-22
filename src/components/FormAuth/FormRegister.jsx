import { Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles.module.css';
import { auth, db } from '@config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function FormRegister() {
    const { textNoAccount, btnDangNhap } = styles;
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Email không được bỏ trống'),
        password: Yup.string()
            .min(6, 'Ít nhất 6 ký tự')
            .required('Mật khẩu không được bỏ trống'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        setServerError('');
        setSuccess(false);
        setLoading(true);

        try {
            const email = values.email.trim();
            const password = values.password;

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                email: user.email,
                role: 'user',
                monNey: 0,
                KM: 0,
                createdAt: new Date(),
            });

            if (userCredential.user) {
                setSuccess(true);
                navigate('/');
                resetForm();
            }
        } catch (error) {
            console.log('REGISTER ERROR:', error);

            switch (error.code) {
                case 'auth/email-already-in-use':
                    setServerError('Email đã được đăng ký');
                    break;

                case 'auth/invalid-email':
                    setServerError('Email không hợp lệ');
                    break;

                case 'auth/weak-password':
                    setServerError('Mật khẩu quá yếu (ít nhất 6 ký tự)');
                    break;

                default:
                    setServerError('Đăng ký thất bại, thử lại sau');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='py-4'>
            <Row className='justify-content-center'>
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Card className='shadow border-0'>
                        <Card.Body className='p-4'>
                            <h3 className='mb-4'>Đăng Ký</h3>

                            {success && (
                                <Alert variant='success'>
                                    🎉 Đăng ký thành công!
                                </Alert>
                            )}

                            {serverError && (
                                <Alert variant='danger'>{serverError}</Alert>
                            )}

                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className='mb-3'>
                                        <Field
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                        <ErrorMessage
                                            name='email'
                                            component='div'
                                            className='text-danger'
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='password'
                                            name='password'
                                            placeholder='Mật khẩu'
                                            className='form-control'
                                        />
                                        <ErrorMessage
                                            name='password'
                                            component='div'
                                            className='text-danger'
                                        />
                                    </div>

                                    <button
                                        type='submit'
                                        className={`${btnDangNhap} w-100 p-2`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Spinner
                                                    animation='border'
                                                    size='sm'
                                                    className='me-2'
                                                />
                                                <span>Đang đăng ký...</span>
                                            </>
                                        ) : (
                                            <span>Đăng ký</span>
                                        )}
                                    </button>
                                </Form>
                            </Formik>

                            <div className='text-center my-3'>
                                <div className={textNoAccount}>
                                    <span>Đã có tài khoản?</span>
                                </div>
                            </div>

                            <Button className='w-100 my-3'>
                                <Link
                                    to='/login'
                                    className='text-decoration-none text-white'
                                >
                                    Đăng Nhập Ngay
                                </Link>
                            </Button>

                            <div className='text-center my-3'>
                                <div className={textNoAccount}>
                                    <span>Hoặc đăng nhập qua</span>
                                </div>
                            </div>

                            <Row>
                                <Col xs={6}>
                                    <Button variant='danger' className='w-100'>
                                        <FaGoogle /> Google
                                    </Button>
                                </Col>

                                <Col xs={6}>
                                    <Button variant='primary' className='w-100'>
                                        <FaFacebookF /> Facebook
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
