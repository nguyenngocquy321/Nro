import { Button, Card } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
function TableCard() {
    return (
        <Card className='shadow-sm'>
            <Card.Body>
                <Tabs
                    defaultActiveKey='napThe'
                    id='nap-the-tabs'
                    className='mb-3'
                    fill
                >
                    {/* TAB NẠP THẺ */}
                    <Tab eventKey='napThe' title='Nạp thẻ'>
                        <Form>
                            {/* Loại thẻ */}
                            <Form.Group className='mb-4 mt-3'>
                                <Form.Select defaultValue=''>
                                    <option value='' disabled>
                                        Chọn loại thẻ
                                    </option>
                                    <option value='VIETTEL'>Viettel</option>
                                    <option value='MOBIFONE'>Mobifone</option>
                                    <option value='VINAPHONE'>Vinaphone</option>
                                    <option value='VTC'>VTC</option>
                                    <option value='GATE'>Gate</option>
                                    <option value='ZING'>Zing</option>
                                </Form.Select>
                            </Form.Group>

                            {/* Mệnh giá */}
                            <Form.Group className='mb-4'>
                                <Form.Select defaultValue=''>
                                    <option value='' disabled>
                                        Chọn mệnh giá
                                    </option>
                                    <option value='10000'>10.000 VNĐ</option>
                                    <option value='20000'>20.000 VNĐ</option>
                                    <option value='30000'>30.000 VNĐ</option>
                                    <option value='50000'>50.000 VNĐ</option>
                                    <option value='100000'>100.000 VNĐ</option>
                                    <option value='200000'>200.000 VNĐ</option>
                                    <option value='300000'>300.000 VNĐ</option>
                                    <option value='500000'>500.000 VNĐ</option>
                                    <option value='1000000'>
                                        1.000.000 VNĐ
                                    </option>
                                </Form.Select>
                            </Form.Group>

                            {/* Serial */}
                            <Form.Group className='mb-4'>
                                <Form.Control
                                    type='text'
                                    placeholder='Nhập số serial'
                                />
                            </Form.Group>

                            {/* Mã thẻ */}
                            <Form.Group className='mb-4'>
                                <Form.Control
                                    type='text'
                                    placeholder='Nhập mã thẻ'
                                />
                            </Form.Group>

                            {/* Button */}
                            <Button variant='primary' className='w-100 py-2'>
                                Nạp thẻ
                            </Button>
                        </Form>
                    </Tab>

                    {/* TAB TOP NẠP */}
                    <Tab eventKey='topNapTien' title='Top Nạp Tiền'>
                        <div className='p-3'>Nội dung top nạp tiền</div>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}
export default TableCard;
