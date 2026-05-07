import { useContext, useEffect, useEffectEvent } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import {
    BsPersonBadge,
    BsWallet2,
    BsPerson,
    BsGift,
    BsPhone,
} from 'react-icons/bs';
import { UserContext } from '@contexts/UserProvider';
import styles from './styles.module.css';

function DashboardMember() {
    const { user } = useContext(UserContext);
    // Hàm định dạng tiền tệ VND
    const formatVND = amount => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount || 0);
    };

    const stats = [
        {
            title: 'ID tài khoản',
            value: `#${user?.id || 'N/A'}`,
            icon: <BsPersonBadge size={22} />,
            color: 'primary',
            bg: styles.bgLightPrimary,
        },
        {
            title: 'Username',
            value: user?.username || 'N/A',
            icon: <BsPerson size={22} />,
            color: 'success',
            bg: styles.bgLightSuccess,
        },
        {
            title: 'Số điện thoại',
            value: user?.sdt || 'Chưa cập nhật',
            icon: <BsPhone size={22} />,
            color: 'info',
            bg: styles.bgLightInfo,
        },
        {
            title: 'Số dư Card',
            value: formatVND(user?.card),
            icon: <BsWallet2 size={22} />,
            color: 'danger',
            bg: styles.bgLightDanger,
        },
        {
            title: 'Số dư ATM',
            value: formatVND(user?.atm),
            icon: <BsGift size={22} />,
            color: 'warning',
            bg: styles.bgLightWarning,
        },
    ];
    return (
        <Card className={styles.mainDashboardCard}>
            <Card.Body className='p-4'>
                <div className='d-flex align-items-center mb-4'>
                    <div
                        className='bg-primary rounded-pill'
                        style={{ width: '5px', height: '24px' }}
                    ></div>
                    <h4
                        className={`ms-3 mb-0 fw-bold text-uppercase ${styles.letterSpacing1}`}
                    >
                        Tổng quan tài khoản
                    </h4>
                </div>

                <Row className='g-3'>
                    {stats.map((item, index) => (
                        <Col xs={12} sm={6} lg={4} key={index}>
                            <Card className={styles.statItemCard}>
                                <Card.Body className='d-flex align-items-center p-3'>
                                    <div
                                        className={`${styles.iconBox} ${item.bg} text-${item.color} rounded-3 me-3`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className='overflow-hidden'>
                                        <p className='text-muted small mb-1 fw-medium'>
                                            {item.title}
                                        </p>
                                        <h6 className='fw-bold mb-0 text-truncate'>
                                            {item.value}
                                        </h6>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default DashboardMember;
