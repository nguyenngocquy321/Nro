import { Button, Container } from 'react-bootstrap';
import Breadcrum from '@common/BreadCum/BreadCum';
import { Link } from 'react-router-dom';
function Detail() {
    return (
        <Container>
            <Breadcrum
                title={
                    <div className='fs-4 mt-3'>
                        <div className='mb-2'>ACC nro #35579 - Như Ảnh</div>
                        <div className='mb-2'>
                            <span>
                                CARD : 3,950,000 <sup>đ</sup>
                            </span>
                            <span>
                                ATM : 3,434,783 <sup>đ</sup>
                            </span>
                        </div>
                        <Button
                            as={Link}
                            to='/account?id=1'
                            variant='danger'
                            className='w-50'
                        >
                            Mua Ngay
                        </Button>
                    </div>
                }
                desc={'nro #35579'}
            />
            <div>
                <h2 className='fw-bold'>Thông Tin</h2>
                <hr />
                <div>
                    <div>
                        <div className='d-flex gap-4'>
                            <div>
                                HÀNH TINH:
                                <strong className='text-danger ms-2'>
                                    Xayda
                                </strong>
                            </div>
                            <div>
                                SERVER:
                                <strong className='text-danger ms-2'>
                                    2 sao
                                </strong>
                            </div>
                        </div>
                        <div>
                            ĐĂNG KÝ:
                            <strong className='text-danger ms-2'>Ảo</strong>
                        </div>
                        <div>
                            NỔI BẬT:
                            <br />
                            <strong className='text-danger'>
                                MAX 575K HP-ĐÃ KÍCH MAX SSN +3% SD-ĐÃ KÍCH BÓNG
                                RỒNG-XAYDA SEVER 2 CHƠI HP-CHI TIẾT XEM ẢNH-
                                THIỆN CHÍ MUA IB ZALO SHOP 0339.38.2222 CÓ FIX
                                CHO AE
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-3'>
                    <img
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/644e1d76799c8aa1de471ddd83a68dca.jpg'
                        alt=''
                        style={{ width: '100%' }}
                    />
                </div>
                <div className='mt-3'>
                    <img
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/644e1d76799c8aa1de471ddd83a68dca.jpg'
                        alt=''
                        style={{ width: '100%' }}
                    />
                </div>
                <div className='mt-3'>
                    <img
                        src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/storage/imageacc/644e1d76799c8aa1de471ddd83a68dca.jpg'
                        alt=''
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        </Container>
    );
}
export default Detail;
