import { Col, Container, Row } from 'react-bootstrap';
import ItemsBlog from '@components/layout/ItemsBlog/ItemsBlog';
import Breadcrumbs from '@components/common/Breadcrumbs/Breadcrumbs';
function Blogs() {
    return (
        <Container className='mt-5'>
            <div>
                <Breadcrumbs title={'Blog - Tin Tức'} desc={'Blog - Tin Tức'} />
            </div>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <ItemsBlog />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ItemsBlog />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ItemsBlog />
                </Col>
            </Row>
        </Container>
    );
}
export default Blogs;
