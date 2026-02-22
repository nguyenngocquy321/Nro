import { Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles.module.css';

import { auth, db } from '@config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormLogin() {
    const { textNoAccount, btnDangNhap } = styles;
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Email không được bỏ trống'),
        password: Yup.string()
            .min(6, 'Ít nhất 6 ký tự')
            .required('Mật khẩu không được bỏ trống'),
    });

    const handleSubmit = async values => {
        setErrorMsg('');
        setLoading(true);

        try {
            // 🔹 Đăng nhập
            const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email.trim(),
                values.password
            );

            const user = userCredential.user;

            if (!user) {
                throw new Error('Không tìm thấy user');
            }

            // 🔹 Lấy role từ Firestore
            const snap = await getDoc(doc(db, 'users', user.uid));

            if (snap.exists()) {
                const role = snap.data().role;

                if (role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                navigate('/');
            }
        } catch (error) {
            console.log('LOGIN ERROR:', error);

            switch (error.code) {
                case 'auth/user-not-found':
                    setErrorMsg('Email chưa được đăng ký');
                    break;

                case 'auth/wrong-password':
                    setErrorMsg('Sai mật khẩu');
                    break;

                case 'auth/invalid-credential': // Firebase mới
                    setErrorMsg('Email hoặc mật khẩu không đúng');
                    break;

                case 'auth/invalid-email':
                    setErrorMsg('Email không hợp lệ');
                    break;

                case 'auth/too-many-requests':
                    setErrorMsg('Tài khoản bị khóa tạm thời, thử lại sau');
                    break;

                default:
                    setErrorMsg('Đăng nhập thất bại, vui lòng thử lại');
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
                            <h3 className='mb-4'>Đăng Nhập</h3>

                            {errorMsg && (
                                <Alert variant='danger'>{errorMsg}</Alert>
                            )}

                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
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
                                                    <span>
                                                        <Spinner
                                                            animation='border'
                                                            size='sm'
                                                            className='me-2'
                                                        />
                                                        Đang đăng nhập...
                                                    </span>
                                                </>
                                            ) : (
                                                <span>Đăng nhập</span>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </Formik>

                            <div className='text-center my-3'>
                                <div className={textNoAccount}>
                                    <span>Chưa có tài khoản?</span>
                                </div>
                            </div>

                            <Button className='w-100 my-3 p-2'>
                                <Link
                                    to='/register'
                                    className='text-decoration-none text-white'
                                >
                                    Đăng Ký Ngay
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

export default FormLogin;
