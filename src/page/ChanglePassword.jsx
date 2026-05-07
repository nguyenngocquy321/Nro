import { useFormik } from 'formik';
import { Card, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
function ChangePassword() {
    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Mật khẩu không được để trống'),
        newPassword: Yup.string().required('Mật khẩu mới không được để trống'),
        newPassword2: Yup.string().required(
            'Nhập lại mật khẩu không được để trống'
        ),
    });
    const formik = useFormik({
        initialValues: {
            oldPassword,
            newPassword,
            newPassword2,
        },
        validationSchema: validationSchema,
    });
    return (
        <Card className='shadow-sm'>
            <Card.Body>
                <h4 className='mb-4'>Đổi mật khẩu</h4>

                <Form>
                    {/* Mật khẩu cũ */}
                    <Form.Group className='mb-3'>
                        <Form.Label>Mật khẩu hiện tại</Form.Label>
                        <Form.Control
                            type='password'
                            name='oldPassword'
                            placeholder='Nhập mật khẩu hiện tại'
                        />
                    </Form.Group>

                    {/* Mật khẩu mới */}
                    <Form.Group className='mb-3'>
                        <Form.Label>Mật khẩu mới</Form.Label>
                        <Form.Control
                            type='password'
                            name='newPassword'
                            placeholder='Nhập mật khẩu mới'
                        />
                    </Form.Group>

                    {/* Nhập lại mật khẩu */}
                    <Form.Group className='mb-4'>
                        <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                        <Form.Control
                            type='password'
                            name='newPassword2'
                            placeholder='Nhập lại mật khẩu mới'
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='w-100'>
                        Đổi mật khẩu
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ChangePassword;
