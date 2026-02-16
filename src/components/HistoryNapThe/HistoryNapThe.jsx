import { Table, Badge, Container, Card } from 'react-bootstrap';

function HistoryNapThe() {
    const data = [
        {
            id: 1,
            nhaMang: 'Viettel',
            menhGia: '100.000',
            seri: '12345678901',
            maThe: '987654321098',
            trangThai: 'Thành công',
            thoiGian: '16/02/2026 07:15',
        },
        {
            id: 2,
            nhaMang: 'Mobifone',
            menhGia: '50.000',
            seri: '22233344455',
            maThe: '555444333222',
            trangThai: 'Đang xử lý',
            thoiGian: '15/02/2026 20:10',
        },
        {
            id: 3,
            nhaMang: 'Vinaphone',
            menhGia: '200.000',
            seri: '99988877766',
            maThe: '111222333444',
            trangThai: 'Thất bại',
            thoiGian: '14/02/2026 18:00',
        },
    ];

    const renderStatus = status => {
        switch (status) {
            case 'Thành công':
                return <Badge bg='success'>{status}</Badge>;
            case 'Đang xử lý':
                return <Badge bg='warning'>{status}</Badge>;
            case 'Thất bại':
                return <Badge bg='danger'>{status}</Badge>;
            default:
                return <Badge bg='secondary'>{status}</Badge>;
        }
    };

    return (
        <Card className='shadow'>
            <Card.Body>
                <h1 className='mb-4'>Lịch Sử Nạp Tiền</h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nhà mạng</th>
                            <th>Mệnh giá</th>
                            <th>Serial</th>
                            <th>Mã thẻ</th>
                            <th>Trạng thái</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nhaMang}</td>
                                <td>{item.menhGia} VNĐ</td>
                                <td>{item.seri}</td>
                                <td>{item.maThe}</td>
                                <td>{renderStatus(item.trangThai)}</td>
                                <td>{item.thoiGian}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default HistoryNapThe;
