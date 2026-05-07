import { Row, Col, Card, Alert, Spinner, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import styles from './styles.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '@contexts/AuthProvider';
import { ToastMessgeContext } from '@contexts/ToastMessgeProvider';
import { getAuth } from 'firebase/auth';
import { getUser } from '@config/api/user/user';
function FormLogin() {
    const { textNoAccount, btnDangNhap, passwordForm, iconEye } = styles;
    const [show, setShow] = useState(false);
    const { loginUser, loading } = useContext(AuthContext);
    const { toast } = useContext(ToastMessgeContext);
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        username: Yup.string().required('Tên đăng nhập không được để trống'),
        password: Yup.string().required('Mật khẩu không được để trống'),
    });
    const auth = getAuth();
    const handleLogin = async values => {
        const result = await loginUser(values.username, values.password);
        if (result.success) {
            toast.success('Đăng nhập thành công');
            const auth = await getAuth();
            const res = await getUser(auth.currentUser.uid);
            if (res.data.role === 'USER') {
                navigate('/');
            } else {
                navigate('/admin');
            }
        } else {
            toast.error('Sai tài khoản hoặc mật khẩu');
        }
    };
    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: validationSchema,
        onSubmit: handleLogin,
    });
    return (
        <div className='py-4'>
            <Row className='justify-content-center'>
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Card className='shadow border-0'>
                        <Card.Body className='p-4'>
                            <h3 className='mb-4'>Đăng Nhập</h3>

                            <Form noValidate onSubmit={formik.handleSubmit}>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        name='username'
                                        placeholder='Tên đăng nhập'
                                        className='form-control'
                                        isInvalid={
                                            formik.touched.username &&
                                            !!formik.errors.username
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {formik.errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <div id={passwordForm}>
                                        <Form.Control
                                            type={show ? 'text' : 'password'}
                                            name='password'
                                            placeholder='Mật khẩu'
                                            className='form-control'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <span
                                            onClick={() => setShow(!show)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {show ? (
                                                <FaEye id={iconEye} />
                                            ) : (
                                                <FaEyeSlash id={iconEye} />
                                            )}
                                        </span>
                                    </div>
                                    {formik.touched.password &&
                                        formik.errors.password && (
                                            <div
                                                style={{
                                                    color: '#dc3545',
                                                    fontSize: '0.875rem',
                                                    marginTop: '0.25rem',
                                                }}
                                            >
                                                {formik.errors.password}
                                            </div>
                                        )}
                                </Form.Group>
                                <button
                                    type='submit'
                                    className={`${btnDangNhap} w-100 p-2`}
                                    disabled={loading}
                                    style={{
                                        opacity: loading ? 0.7 : 1,
                                        cursor: loading
                                            ? 'not-allowed'
                                            : 'pointer',
                                    }}
                                >
                                    <span>
                                        {loading
                                            ? 'Đang đăng nhập...'
                                            : 'Đăng nhập'}
                                    </span>
                                </button>
                            </Form>

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
