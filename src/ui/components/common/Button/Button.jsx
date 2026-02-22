import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getAuth, signOut } from 'firebase/auth';
function Button({ text, link, isLogout }) {
    const { btnBuy } = styles;
    const navigate = useNavigate();
    const authLogout = getAuth();
    const logOut = async () => {
        await signOut(authLogout);
        navigate('/login');
    };
    const handleClick = e => {
        if (isLogout) {
            e.preventDefault();
            logOut();
        }
    };

    return (
        <div className='mt-auto d-flex justify-content-center'>
            <Link to={link} className={btnBuy} onClick={handleClick}>
                <span>{text}</span>
            </Link>
        </div>
    );
}

export default Button;
