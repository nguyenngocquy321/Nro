import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import MainContents from './MainContents/MainContents';

function DefaultAdmin() {
    return (
        <Container fluid className='p-0'>
            <Row className='g-0'>
                {/* Sidebar */}
                <Col md={2}>
                    <SideBar />
                </Col>

                {/* Main Area */}
                <Col md={10} className='bg-light min-vh-100'>
                    <Header />
                    <div className='p-4'>
                        <MainContents />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DefaultAdmin;
