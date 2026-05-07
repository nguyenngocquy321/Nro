import { Form, Row, Col, Button } from 'react-bootstrap';

function ProductFilterForm() {
    return (
        <div className='p-3 bg-light rounded shadow-sm mb-4'>
            <Row className='g-3 align-items-end'>
                {/* Lọc theo giá */}
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Lọc theo giá</Form.Label>
                        <Form.Select></Form.Select>
                    </Form.Group>
                </Col>

                {/* Hành tinh */}
                <Col md={2}>
                    <Form.Group>
                        <Form.Label>Hành tinh</Form.Label>
                        <Form.Select></Form.Select>
                    </Form.Group>
                </Col>

                {/* Server */}
                <Col md={2}>
                    <Form.Group>
                        <Form.Label>Server</Form.Label>
                        <Form.Select></Form.Select>
                    </Form.Group>
                </Col>

                {/* Button */}
                <Col md={2}>
                    <Button variant='primary' className='w-100'>
                        Lọc
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default ProductFilterForm;
