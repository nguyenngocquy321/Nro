import { Card, Row, Col } from 'react-bootstrap';
import { BsPersonBadge, BsEnvelope, BsWallet2 } from 'react-icons/bs';
import { AuthContext } from '@contexts/AuthContext';
import { useContext } from 'react';

function DashboardMember() {
    const { user } = useContext(AuthContext);

    // Nếu chưa load xong
    if (!user) {
        return <p className='text-center mt-4'>Đang tải dữ liệu...</p>;
    }

    return (
        <Card>
            <Card.Body>
                <h4 className='mb-4 fw-bold'>Dashboard</h4>

                <Row className='g-4'>
                    {/* ID */}
                    <Col xs={12} sm={6} lg={4}>
                        <Card className='text-center h-100 stat-card'>
                            <Card.Body>
                                <BsPersonBadge
                                    size={30}
                                    className='mb-3 text-primary'
                                />
                                <h6 className='text-muted'>ID tài khoản</h6>
                                <p className='fw-bold fs-5 mb-0'>{user.id}</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Email */}
                    <Col xs={12} sm={6} lg={4}>
                        <Card className='text-center h-100 stat-card'>
                            <Card.Body>
                                <BsEnvelope
                                    size={30}
                                    className='mb-3 text-success'
                                />
                                <h6 className='text-muted'>Email</h6>
                                <p className='fw-bold fs-6 mb-0 text-break'>
                                    {user.email}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Số dư */}
                    <Col xs={12} sm={12} lg={4}>
                        <Card className='text-center h-100 stat-card'>
                            <Card.Body>
                                <BsWallet2
                                    size={30}
                                    className='mb-3 text-danger'
                                />
                                <h6 className='text-muted'>Số dư</h6>
                                <p className='fw-bold fs-5 text-danger mb-0'>
                                    {user.KM ?? 0}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default DashboardMember;
