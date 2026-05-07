import styles from './styles.module.scss';
import { BsCalendar, BsPerson } from 'react-icons/bs';
function ItemsBlog() {
    const { containerCard, boxImg, boxContent, metaContainer, desc } = styles;
    return (
        <div className={containerCard}>
            <div className={boxImg}>
                <img
                    src='https://s3.hcm-1.cloud.cmctelecom.vn/bannick/photos/shares/bai_viet/nickmt.com/huong-dan-tai-game-ngoc-rong/0.jpg'
                    alt=''
                />
            </div>
            <div className={boxContent}>
                <h5>
                    <a href='#'>Hướng Dẫn Tải Game Chú Bé Rồng Trên iOS</a>
                </h5>
                <ul className={metaContainer}>
                    <li>
                        <BsCalendar /> 2 Năm Trước
                    </li>
                    <li>
                        <BsPerson /> Admin
                    </li>
                </ul>
                <div className={desc}>
                    Ngọc Rồng Online là Trò Chơi Trực Tuyến với cốt truyện xoay
                    quanh bộ truyện tranh 7 viên Ngọc Rồng. Người chơi sẽ hóa
                    thân thành một trong những anh hùng của 3 hành tinh: Trái
                    Đất, Xayda, Namếc. Cùng luyện tập, tăng cường sức mạnh và kỹ
                    năng. Đoàn kết cùng chiến đấu chống lại các thế lực hung ác.
                    Cùng nhau tranh tài. Bước 5 : Sau khi ứng dụng được tải
                    xuống, khi ấn vào sẽ có mô tả thông báo như hình bên, ấn vào
                    nút “Hủy” và chuyển sang bước tiếp theo, tiến hành vào chức
                    năng ‘Cài đặt’ của điện thoại và thao tác quản lý VPN và
                    thiết bị theo các bước được đánh dấu theo hình ảnh bên dưới
                </div>
            </div>
        </div>
    );
}
export default ItemsBlog;
