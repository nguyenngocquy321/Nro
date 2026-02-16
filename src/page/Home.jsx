import Content from '@components/Content/Content';
import ImageSlider from '@components/ImageSlider/ImageSlider';
import { Col, Container, Row } from 'react-bootstrap';
import TableCard from '@components/TableCard/TableCard';
import CardTextModal from '@components/CardTextModal/CardTextModal';
function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <TableCard />
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <ImageSlider />
                    </Col>
                </Row>
            </Container>
            <Content />
            <CardTextModal />
        </>
    );
}
export default Home;
