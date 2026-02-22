import { BsPerson } from 'react-icons/bs';
import styles from './styles.module.css';
import Button from '@common/Button/Button';
import { AuthContext } from '@contexts/AuthContext';
import { useContext } from 'react';
function UserSuccess({ logOut }) {
    const {
        containerIcon,
        quantiTy,
        menuChild,
        listTop,
        containerBottom,
        hiStory,
    } = styles;
    const { user } = useContext(AuthContext);
    if (!user) {
        return <p className='text-center mt-4'>Đang tải dữ liệu...</p>;
    }
    return (
        <div className={containerIcon}>
            <BsPerson size={30} />
            <span className={quantiTy}>2</span>

            <div className={menuChild}>
                <div className={listTop}>
                    <div>
                        Số dư: {user.KM ?? 0} <sup>đ</sup>
                    </div>
                    <div>|</div>
                    <div>
                        KM: 0 <sup>coin</sup>
                    </div>
                </div>

                <hr />

                <div className='ps-3' id={hiStory}>
                    Lịch sử nạp
                </div>
                <hr color='#ccc' />
                <div className={containerBottom}>
                    <Button text={'Hồ sơ'} link={'member'} />

                    <Button text='Đăng xuất' isLogout={true} />
                </div>
            </div>
        </div>
    );
}

export default UserSuccess;
