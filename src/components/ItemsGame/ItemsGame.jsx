import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ItemsGame() {
    return (
        <Card className='mt-5 shadow-sm'>
            {/* Ảnh */}
            <div>
                <Card.Img
                    variant='top'
                    src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/573fd2e9d850742ed722f30a0ab4cf33.jpg'
                />
            </div>

            <Card.Body>
                {/* Thông tin */}
                <div className='d-flex justify-content-between'>
                    <div className='mb-2'>
                        Hành Tinh:
                        <strong className='ms-1'>Xayda</strong>
                    </div>

                    <div className='mb-2'>
                        Server: <strong>1 Sao</strong>
                    </div>
                </div>

                <div className='text-center'>
                    Đăng ký: <strong>Ảo</strong>
                </div>

                {/* Giá */}
                <div className='text-center'>
                    <strong className='text-success'>ATM 3,434,783đ</strong>
                </div>

                <div className='text-center'>
                    <strong className='text-danger'>Card 3,950,000đ</strong>
                </div>

                {/* Nút mua */}
                <div className='d-flex gap-2 mt-3'>
                    <Button
                        as={Link}
                        to='/account?id=1'
                        variant='outline-secondary'
                        className='w-50'
                    >
                        Chi Tiết
                    </Button>

                    <Button
                        as={Link}
                        to='/mua/123'
                        variant='danger'
                        className='w-50'
                    >
                        Mua Ngay
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ItemsGame;
