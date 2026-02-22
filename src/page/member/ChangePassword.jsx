import { Card, Form as BsForm, Button, Alert } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import {
    getAuth,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential,
} from 'firebase/auth';
import { useState } from 'react';

const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Nhập mật khẩu hiện tại'),
    newPassword: Yup.string()
        .min(6, 'Tối thiểu 6 ký tự')
        .required('Nhập mật khẩu mới'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Mật khẩu không khớp')
        .required('Nhập lại mật khẩu'),
});

function ChangePassword() {
    const auth = getAuth();
    const [message, setMessage] = useState(null);

    const handleChangePassword = async (values, { setSubmitting }) => {
        try {
            const user = auth.currentUser;

            if (!user) {
                setMessage({ type: 'danger', text: 'Chưa đăng nhập' });
                return;
            }

            // 🔐 Re-authenticate
            const credential = EmailAuthProvider.credential(
                user.email,
                values.currentPassword
            );

            await reauthenticateWithCredential(user, credential);

            // 🔥 Update password
            await updatePassword(user, values.newPassword);

            setMessage({ type: 'success', text: 'Đổi mật khẩu thành công!' });
        } catch (error) {
            console.log(error);

            if (error.code === 'auth/wrong-password') {
                setMessage({
                    type: 'danger',
                    text: 'Mật khẩu hiện tại không đúng',
                });
            } else if (error.code === 'auth/weak-password') {
                setMessage({
                    type: 'danger',
                    text: 'Mật khẩu quá yếu',
                });
            } else {
                setMessage({
                    type: 'danger',
                    text: 'Có lỗi xảy ra',
                });
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Card className='shadow-sm'>
            <Card.Body>
                <h4 className='mb-4'>Đổi mật khẩu</h4>

                {message && (
                    <Alert variant={message.type}>{message.text}</Alert>
                )}

                <Formik
                    initialValues={{
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleChangePassword}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <BsForm.Group className='mb-3'>
                                <BsForm.Label>Mật khẩu hiện tại</BsForm.Label>
                                <Field
                                    name='currentPassword'
                                    type='password'
                                    as={BsForm.Control}
                                    isInvalid={
                                        touched.currentPassword &&
                                        !!errors.currentPassword
                                    }
                                />
                                <ErrorMessage
                                    name='currentPassword'
                                    component={BsForm.Control.Feedback}
                                    type='invalid'
                                />
                            </BsForm.Group>

                            <BsForm.Group className='mb-3'>
                                <BsForm.Label>Mật khẩu mới</BsForm.Label>
                                <Field
                                    name='newPassword'
                                    type='password'
                                    as={BsForm.Control}
                                    isInvalid={
                                        touched.newPassword &&
                                        !!errors.newPassword
                                    }
                                />
                                <ErrorMessage
                                    name='newPassword'
                                    component={BsForm.Control.Feedback}
                                    type='invalid'
                                />
                            </BsForm.Group>

                            <BsForm.Group className='mb-4'>
                                <BsForm.Label>
                                    Nhập lại mật khẩu mới
                                </BsForm.Label>
                                <Field
                                    name='confirmPassword'
                                    type='password'
                                    as={BsForm.Control}
                                    isInvalid={
                                        touched.confirmPassword &&
                                        !!errors.confirmPassword
                                    }
                                />
                                <ErrorMessage
                                    name='confirmPassword'
                                    component={BsForm.Control.Feedback}
                                    type='invalid'
                                />
                            </BsForm.Group>

                            <Button
                                type='submit'
                                className='w-100'
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? 'Đang xử lý...'
                                    : 'Đổi mật khẩu'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    );
}

export default ChangePassword;
