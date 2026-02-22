import { Card, Form, Button } from 'react-bootstrap';

function ChangePassword() {
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
                            placeholder='Nhập mật khẩu hiện tại'
                        />
                    </Form.Group>

                    {/* Mật khẩu mới */}
                    <Form.Group className='mb-3'>
                        <Form.Label>Mật khẩu mới</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Nhập mật khẩu mới'
                        />
                    </Form.Group>

                    {/* Nhập lại mật khẩu */}
                    <Form.Group className='mb-4'>
                        <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                        <Form.Control
                            type='password'
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
