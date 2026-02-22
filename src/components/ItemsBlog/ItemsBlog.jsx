import { Card } from 'react-bootstrap';
import styles from './styles.module.css';
import { BsCalendar, BsPerson } from 'react-icons/bs';
function ItemsBlog() {
    const { containerCard, listBlogMeta, title, desc } = styles;
    return (
        <Card className={containerCard}>
            <Card.Img
                variant='top'
                src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/photos/shares/bai_viet/nickmt.com/huong-dan-tai-game-ngoc-rong/0.jpg'
            />
            <Card.Body>
                <Card.Title className={title}>
                    Cách Tải Ngọc Rồng Online Cho PC, Android và iOS
                </Card.Title>
                <ul className={listBlogMeta}>
                    <li>
                        <BsCalendar className='text-danger' fontSize={20} /> 1
                        năm trước
                    </li>
                    <li>
                        <BsPerson className='text-danger' fontSize={20} /> Admin
                    </li>
                </ul>
                <Card.Text className={desc}>
                    Để tải Ngọc Rồng Online về thiết bị của bạn và bước vào thế
                    giới phiêu lưu thú vị, hãy làm theo hướng dẫn sau đây! Trên
                    PC, bạn cần cài đặt trình giả lập Android (như BlueStacks
                    hoặc LDPlayer), sau đó tải game từ Google Play Store ngay
                    trong trình giả lập. Đối với Android, chỉ cần mở CH Play,
                    tìm kiếm “Ngọc Rồng Online,” nhấn Cài đặt và bắt đầu chơi.
                    Trên iOS, bạn vào App Store, tìm game và nhấn Nhận để tải
                    về. Với vài bước đơn giản, bạn đã có thể tham gia vào hành
                    trình chinh phục 7 viên ngọc rồng ngay trên thiết bị của
                    mình!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ItemsBlog;
