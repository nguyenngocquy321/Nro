import { Col, Container, Row } from 'react-bootstrap';
import Breadcrum from '@common/BreadCum/BreadCum';
import TextInfoNickGame from '@components/TextInfoNickGame/TextInfoNickGame';
import ItemsGame from '@components/ItemsGame/ItemsGame';
import ProductFilterForm from '@common/ProductFilterForm/ProductFilterForm';
function PackNickNgocRongVip() {
    return (
        <Container>
            <Breadcrum
                title={'NICK NGỌC RỒNG VIP'}
                desc={'NICK NGỌC RỒNG VIP'}
            />
            <TextInfoNickGame />
            <ProductFilterForm />
            <Row>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                    <Col md={3} key={item}>
                        <ItemsGame />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default PackNickNgocRongVip;
