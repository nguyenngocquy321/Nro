import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { FaStar } from 'react-icons/fa';
import Button from '@components/common/Button/Button';
import { CiHeart } from 'react-icons/ci';
const productsHome = [
    {
        id: 1,
        title: 'BÁN NICK NGỌC RỒNG',
        url: 'pack-nick-ngoc-rong-vip',
        slug: 'pack-nick-ngoc-rong-vip',
        backgroundImage:
            'https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg',
        quantitySold: 100,
    },
    {
        id: 2,
        title: 'BÁN NICK NGỌC RỒNG',
        url: 'pack-nick-ngoc-rong-vip',
        slug: 'pack-nick-ngoc-rong-vip',
        backgroundImage:
            'https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg',
        quantitySold: 100,
    },
    {
        id: 3,
        title: 'BÁN NICK NGỌC RỒNG',
        url: 'pack-nick-ngoc-rong-vip',
        slug: 'pack-nick-ngoc-rong-vip',
        backgroundImage:
            'https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg',
        quantitySold: 100,
    },
    {
        id: 4,
        title: 'BÁN NICK NGỌC RỒNG',
        url: 'pack-nick-ngoc-rong-vip',
        slug: 'pack-nick-ngoc-rong-vip',
        backgroundImage:
            'https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg',
        quantitySold: 100,
    },
    {
        id: 5,
        title: 'BÁN NICK NGỌC RỒNG',
        url: 'pack-nick-ngoc-rong-vip',
        slug: 'pack-nick-ngoc-rong-vip',
        backgroundImage:
            'https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/03_Category/nickmt/6979e0e3c0624.jpg',
        quantitySold: 100,
    },
];
function Products() {
    const {
        containerItem,
        boxImg,
        title,
        boxContent,
        subContent,
        boxIcon,
        boxHeart,
    } = styles;

    return (
        <Row xs={1} md={4} className='g-4'>
            {productsHome.map((it, index) => {
                return (
                    <Col key={it.id || index}>
                        <div className={containerItem}>
                            <div className={boxImg}>
                                <img src={it.backgroundImage} alt={it.title} />
                                <div className={boxHeart}>
                                    <CiHeart />
                                </div>
                            </div>
                            <div className={boxContent}>
                                <h6 className={title}>
                                    <a href={``}>{it.title}</a>
                                </h6>
                                <div className={subContent}>
                                    Đã bán: 117,799
                                </div>
                                <div className={boxIcon}>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='text-uppercase'>
                                    <Button text={'Mua ngay'} isBg={false} />
                                </div>
                            </div>
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
}
export default Products;
