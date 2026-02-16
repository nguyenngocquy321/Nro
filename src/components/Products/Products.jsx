import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsHeart, BsStar } from 'react-icons/bs';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
function Products() {
    const {
        btnBuy,
        textTitle,
        desc,
        containerHeart,
        overLay,
        containerCard,
        cardWrapper,
    } = styles;
    return (
        <Row xs={1} md={4} className='g-4'>
            <Col>
                <Card className={containerCard}>
                    <div className={cardWrapper}>
                        <Card.Img
                            variant='top'
                            src='https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg'
                        />

                        <div className={overLay}></div>

                        <div className={containerHeart}>
                            <BsHeart />
                        </div>
                    </div>

                    <Card.Body className='d-flex flex-column text-center'>
                        <Card.Title className={textTitle}>
                            <Link to='/buy' className={textTitle}>
                                BÁN NICK NGỌC RỒNG
                            </Link>
                        </Card.Title>

                        <Card.Text className={desc}>Đã bán: 108,599</Card.Text>

                        <Card.Text>
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                        </Card.Text>

                        {/* Đẩy nút xuống dưới */}
                        <div className='mt-auto d-flex justify-content-center'>
                            <Link to='/buy' className={btnBuy}>
                                <span>Mua ngay</span>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className={containerCard}>
                    <div className={cardWrapper}>
                        <Card.Img
                            variant='top'
                            src='https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg'
                        />

                        <div className={overLay}></div>

                        <div className={containerHeart}>
                            <BsHeart />
                        </div>
                    </div>

                    <Card.Body className='d-flex flex-column text-center'>
                        <Card.Title className={textTitle}>
                            <Link to='/buy' className={textTitle}>
                                BÁN NICK NGỌC RỒNG
                            </Link>
                        </Card.Title>

                        <Card.Text className={desc}>Đã bán: 108,599</Card.Text>

                        <Card.Text>
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                        </Card.Text>

                        {/* Đẩy nút xuống dưới */}
                        <div className='mt-auto d-flex justify-content-center'>
                            <Link to='/buy' className={btnBuy}>
                                <span>Mua ngay</span>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className={containerCard}>
                    <div className={cardWrapper}>
                        <Card.Img
                            variant='top'
                            src='https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg'
                        />

                        <div className={overLay}></div>

                        <div className={containerHeart}>
                            <BsHeart />
                        </div>
                    </div>

                    <Card.Body className='d-flex flex-column text-center'>
                        <Card.Title className={textTitle}>
                            <Link to='/buy' className={textTitle}>
                                BÁN NICK NGỌC RỒNG
                            </Link>
                        </Card.Title>

                        <Card.Text className={desc}>Đã bán: 108,599</Card.Text>

                        <Card.Text>
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                        </Card.Text>

                        {/* Đẩy nút xuống dưới */}
                        <div className='mt-auto d-flex justify-content-center'>
                            <Link to='/buy' className={btnBuy}>
                                <span>Mua ngay</span>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className={containerCard}>
                    <div className={cardWrapper}>
                        <Card.Img
                            variant='top'
                            src='https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg'
                        />

                        <div className={overLay}></div>

                        <div className={containerHeart}>
                            <BsHeart />
                        </div>
                    </div>

                    <Card.Body className='d-flex flex-column text-center'>
                        <Card.Title className={textTitle}>
                            <Link to='/buy' className={textTitle}>
                                BÁN NICK NGỌC RỒNG
                            </Link>
                        </Card.Title>

                        <Card.Text className={desc}>Đã bán: 108,599</Card.Text>

                        <Card.Text>
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                        </Card.Text>

                        {/* Đẩy nút xuống dưới */}
                        <div className='mt-auto d-flex justify-content-center'>
                            <Link to='/buy' className={btnBuy}>
                                <span>Mua ngay</span>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className={containerCard}>
                    <div className={cardWrapper}>
                        <Card.Img
                            variant='top'
                            src='https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg'
                        />

                        <div className={overLay}></div>

                        <div className={containerHeart}>
                            <BsHeart />
                        </div>
                    </div>

                    <Card.Body className='d-flex flex-column text-center'>
                        <Card.Title className={textTitle}>
                            <Link to='/buy' className={textTitle}>
                                BÁN NICK NGỌC RỒNG
                            </Link>
                        </Card.Title>

                        <Card.Text className={desc}>Đã bán: 108,599</Card.Text>

                        <Card.Text>
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                            <BsStar color='orange' />
                        </Card.Text>

                        {/* Đẩy nút xuống dưới */}
                        <div className='mt-auto d-flex justify-content-center'>
                            <Link to='/buy' className={btnBuy}>
                                <span>Mua ngay</span>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
export default Products;
