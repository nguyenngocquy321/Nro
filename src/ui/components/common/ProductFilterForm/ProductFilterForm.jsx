import { Form, Row, Col, Button } from 'react-bootstrap';

function ProductFilterForm() {
    return (
        <div className='p-3 bg-light rounded shadow-sm mb-4'>
            <Row className='g-3 align-items-end'>
                {/* Mã số */}
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Mã số</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nhập mã sản phẩm'
                        />
                    </Form.Group>
                </Col>

                {/* Lọc theo giá */}
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Lọc theo giá</Form.Label>
                        <Form.Select>
                            <option value='all'>Lọc theo giá (Tất cả)</option>
                            <option value='0-50000'>Từ 50k trở xuống</option>
                            <option value='50000-100000'>
                                Từ 50k đến 100k
                            </option>
                            <option value='100000-300000'>
                                Từ 100k đến 300k
                            </option>
                            <option value='300000-500000'>
                                Từ 300k đến 500k
                            </option>
                            <option value='500000-700000'>
                                Từ 500k đến 700k
                            </option>
                            <option value='700000-1000000'>
                                Từ 700k đến 1 Triệu
                            </option>
                            <option value='1000000-2000000'>
                                Từ 1 Triệu đến 2 Triệu
                            </option>
                            <option value='2000000-5000000'>
                                Từ 2 Triệu đến 5 Triệu
                            </option>
                            <option value='5000000-10000000'>
                                Từ 5 Triệu đến 10 Triệu
                            </option>
                            <option value='10000000-100000000'>
                                Từ 10 Triệu trở lên
                            </option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                {/* Hành tinh */}
                <Col md={2}>
                    <Form.Group>
                        <Form.Label>Hành tinh</Form.Label>
                        <Form.Select>
                            <option>Tất cả</option>
                            <option>Xayda</option>
                            <option>Namek</option>
                            <option>Trái Đất</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                {/* Server */}
                <Col md={2}>
                    <Form.Group>
                        <Form.Label>Server</Form.Label>
                        <Form.Select>
                            <option>Tất cả</option>
                            <option>1 Sao</option>
                            <option>2 Sao</option>
                            <option>3 Sao</option>
                        </Form.Select>
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
