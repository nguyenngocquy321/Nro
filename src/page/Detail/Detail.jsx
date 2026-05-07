import { Button, Container, Spinner } from 'react-bootstrap';
import Breadcrumbs from '@components/common/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

function Detail() {
    return (
        <Container className='py-4'>
            <Breadcrumbs
                title={
                    <div className='fs-4 mt-3'>
                        <div className='mb-2'>ACC nro #{data.id} - Như Ảnh</div>

                        <div className='mb-3'>
                            <span className='me-4'>
                                CARD: {data.priceCard?.toLocaleString()}{' '}
                                <sup>đ</sup>
                            </span>
                            <span>
                                ATM: {data.priceATM?.toLocaleString()}{' '}
                                <sup>đ</sup>
                            </span>
                        </div>

                        <Button
                            as={Link}
                            to={`/account?id=${data.id}`}
                            variant='danger'
                            className='w-50'
                        >
                            Mua Ngay
                        </Button>
                    </div>
                }
                desc={`nro #${data.id}`}
            />

            {/* ================= THÔNG TIN ================= */}
            <div className='mt-4'>
                <h2 className='fw-bold'>Thông Tin</h2>
                <hr />

                <div className='d-flex flex-column gap-2'>
                    <div className='d-flex gap-4'>
                        <div>
                            HÀNH TINH:
                            <strong className='text-danger ms-2'>
                                {data.planet}
                            </strong>
                        </div>

                        <div>
                            SERVER:
                            <strong className='text-danger ms-2'>
                                {data.server} sao
                            </strong>
                        </div>
                    </div>

                    <div>
                        ĐĂNG KÝ:
                        <strong className='text-danger ms-2'>
                            {data.loaiDK}
                        </strong>
                    </div>

                    <div>
                        NỔI BẬT:
                        <br />
                        <strong className='text-danger'>{data.desc}</strong>
                    </div>
                </div>
            </div>

            {/* ================= HÌNH ẢNH ================= */}
            <div className='mt-4'>
                {detailImages.length > 0 ? (
                    detailImages.map((img, index) => (
                        <div className='mt-3' key={index}>
                            <img
                                src={img}
                                alt={`detail-${index}`}
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <p className='text-muted'>Không có hình ảnh chi tiết</p>
                )}
            </div>
        </Container>
    );
}

export default Detail;
