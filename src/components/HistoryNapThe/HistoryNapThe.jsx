import { useContext } from 'react';
import { Table, Badge, Card } from 'react-bootstrap';
import { NapCardContext } from '@contexts/NapCardProvider';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

dayjs.extend(relativeTime);
dayjs.locale('vi');

function HistoryNapThe() {
    const { dataNap } = useContext(NapCardContext);

    const renderStatus = status => {
        switch (status) {
            case 1:
                return <Badge bg='success'>Thành công</Badge>;

            case 2:
                return <Badge bg='warning'>Sai mệnh giá</Badge>;

            case 3:
                return <Badge bg='danger'>Thẻ lỗi</Badge>;

            case 99:
                return <Badge bg='info'>Đang xử lý</Badge>;

            default:
                return <Badge bg='secondary'>Không rõ</Badge>;
        }
    };

    const formatTime = timestamp => {
        if (!timestamp) return '---';

        // Nếu là Firestore Timestamp
        if (timestamp.toDate) {
            return dayjs(timestamp.toDate()).fromNow();
        }

        // Nếu là object có seconds
        if (timestamp.seconds) {
            return dayjs(new Date(timestamp.seconds * 1000)).fromNow();
        }

        return '---';
    };

    return (
        <Card className='shadow'>
            <Card.Body>
                <h4 className='mb-4'>Lịch Sử Nạp Tiền</h4>

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
                        {dataNap?.length > 0 ? (
                            dataNap.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.telco}</td>
                                    <td>
                                        {Number(item.amount).toLocaleString()}{' '}
                                        VNĐ
                                    </td>
                                    <td>{item.serial}</td>
                                    <td>{item.code}</td>
                                    <td>{renderStatus(item.trangThai)}</td>
                                    <td>{formatTime(item.createdAt)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='7' className='text-center'>
                                    Chưa có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default HistoryNapThe;
