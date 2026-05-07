import { BsPerson } from 'react-icons/bs';
import styles from './styles.module.css';
import Button from '@components/common/Button/Button';
import { useContext } from 'react';
import { UserContext } from '@contexts/UserProvider';

function UserSuccess() {
    const {
        containerIcon,
        quantiTy,
        menuChild,
        listTop,
        containerBottom,
        hiStory,
    } = styles;
    const { logOut } = useContext(UserContext);
    const handleLogout = () => {
        logOut();
    };
    return (
        <div className={containerIcon}>
            <BsPerson size={30} />
            <span className={quantiTy}>2</span>

            <div className={menuChild}>
                <div className={listTop}>
                    <div>
                        Số dư: 0 <sup>đ</sup>
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
                    <Button text={'Hồ sơ'} link={'/member'} isBg={false} />
                    <Button
                        text='Đăng xuất'
                        handleLogout={handleLogout}
                        isBg={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserSuccess;
