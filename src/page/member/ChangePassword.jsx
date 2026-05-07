import { useFormik } from 'formik';
import { Card, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { UserContext } from '@contexts/UserProvider';
import { ToastMessgeContext } from '@contexts/ToastMessgeProvider';
function ChangePassword() {
    const [show, setShow] = useState({
        oldPassword: false,
        newPassword: false,
        newPassword2: false,
    });

    const { passwordForm, iconEye } = styles;
    const { changePassword, loading, statusChanglePassword } =
        useContext(UserContext);
    const { toast } = useContext(ToastMessgeContext);
    const toggleVisibility = field => {
        setShow(prev => ({
            ...prev,
            [field]: !prev[field],
        }));
    };
    const passwordRules =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Mật khẩu không được để trống'),
        newPassword: Yup.string()
            .required('Mật khẩu mới không được để trống')
            .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
            .matches(
                passwordRules,
                'Mật khẩu phải bao gồm: 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt'
            )
            .notOneOf(
                [Yup.ref('oldPassword')],
                'Mật khẩu mới không được trùng mật khẩu cũ'
            ),
        newPassword2: Yup.string()
            .oneOf(
                [Yup.ref('newPassword'), null],
                'Mật khẩu xác nhận không trùng khớp'
            )
            .required('Nhập lại mật khẩu không được để trống'),
    });

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            newPassword2: '',
        },
        validationSchema: validationSchema,
        onSubmit: async values => {
            const success = await changePassword(
                values.oldPassword,
                values.newPassword
            );

            if (success) {
                toast.success('Đổi mật khẩu thành công');
                formik.resetForm();
            } else {
                toast.error('Đổi mật khẩu thất bại.');
            }
        },
    });

    return (
        <Card className='shadow-sm border-0'>
            <Card.Body className='p-5'>
                <h4 className='mb-4 fw-bold'>Đổi mật khẩu</h4>

                <Form onSubmit={formik.handleSubmit}>
                    {/* Mật khẩu cũ */}
                    <Form.Group className='mb-4'>
                        <Form.Label>Mật khẩu hiện tại</Form.Label>
                        <div id={passwordForm}>
                            <Form.Control
                                type={show.oldPassword ? 'text' : 'password'}
                                name='oldPassword'
                                placeholder='Nhập mật khẩu cũ'
                                {...formik.getFieldProps('oldPassword')}
                            />
                            <span
                                onClick={() => toggleVisibility('oldPassword')}
                                className={iconEye}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                }}
                            >
                                {show.oldPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {formik.touched.oldPassword &&
                            formik.errors.oldPassword && (
                                <div
                                    style={{
                                        color: '#dc3545',
                                        fontSize: '0.875rem',
                                        marginTop: '0.25rem',
                                    }}
                                >
                                    {formik.errors.oldPassword}
                                </div>
                            )}
                    </Form.Group>

                    {/* Mật khẩu mới */}
                    <Form.Group className='mb-4'>
                        <Form.Label>Mật khẩu mới</Form.Label>
                        <div id={passwordForm} style={{ position: 'relative' }}>
                            <Form.Control
                                type={show.newPassword ? 'text' : 'password'}
                                name='newPassword'
                                placeholder='Nhập mật khẩu mới'
                                {...formik.getFieldProps('newPassword')}
                            />
                            <span
                                onClick={() => toggleVisibility('newPassword')}
                                className={iconEye}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                }}
                            >
                                {show.newPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {formik.touched.newPassword &&
                            formik.errors.newPassword && (
                                <div
                                    style={{
                                        color: '#dc3545',
                                        fontSize: '0.875rem',
                                        marginTop: '0.25rem',
                                    }}
                                >
                                    {formik.errors.newPassword}
                                </div>
                            )}
                    </Form.Group>

                    {/* Nhập lại mật khẩu */}
                    <Form.Group className='mb-4'>
                        <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                        <div id={passwordForm} style={{ position: 'relative' }}>
                            <Form.Control
                                type={show.newPassword2 ? 'text' : 'password'}
                                name='newPassword2'
                                placeholder='Xác nhận mật khẩu mới'
                                {...formik.getFieldProps('newPassword2')}
                            />
                            <span
                                onClick={() => toggleVisibility('newPassword2')}
                                className={iconEye}
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                }}
                            >
                                {show.newPassword2 ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {formik.touched.newPassword2 &&
                            formik.errors.newPassword2 && (
                                <div
                                    style={{
                                        color: '#dc3545',
                                        fontSize: '0.875rem',
                                        marginTop: '0.25rem',
                                    }}
                                >
                                    {formik.errors.newPassword2}
                                </div>
                            )}
                    </Form.Group>

                    <Button
                        variant='primary'
                        type='submit'
                        className='w-100 py-2 fw-bold'
                        // Vô hiệu hóa nút khi đang loading HOẶC khi form có lỗi/chưa nhập gì
                        disabled={loading || !formik.isValid}
                    >
                        {loading ? (
                            <>
                                <span
                                    className='spinner-border spinner-border-sm me-2'
                                    role='status'
                                    aria-hidden='true'
                                ></span>
                                Đang xử lý...
                            </>
                        ) : (
                            'Cập nhật mật khẩu'
                        )}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ChangePassword;
