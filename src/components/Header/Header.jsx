import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsChevronDown, BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { MenuHeader } from '@contans/contans';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import UserSuccess from './UserSuccess/UserSuccess';
import { AuthContext } from '@contexts/AuthContext';

function Header() {
    const { menuHeaderRight, menuHeader, subMenu, menuItem } = styles;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOut = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
        <Navbar bg='white' expand='lg' className='py-2'>
            <Container>
                {/* LOGO */}
                <Navbar.Brand as={Link} to='/' className='me-auto'>
                    <img
                        src='https://bannick.s3.hcm-1.cloud.cmctelecom.vn/photos/shares/01_logo_game/nickmt/6979e35f433a0.png'
                        alt='Logo'
                        height='70'
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    {/* MENU GIỮA */}
                    <Nav className='mx-auto text-uppercase'>
                        <ul className={menuHeader}>
                            {MenuHeader.map(
                                (item, index) =>
                                    MenuHeader.length - 1 !== index && (
                                        <li
                                            key={index}
                                            className={
                                                item.submenu ? menuItem : ''
                                            }
                                        >
                                            <Link to={item.link}>
                                                {item.name}
                                                {item.submenu && (
                                                    <BsChevronDown
                                                        size={16}
                                                        className='ms-1'
                                                    />
                                                )}
                                            </Link>

                                            {item.submenu && !item.right && (
                                                <ul className={subMenu}>
                                                    {item.subMenu?.map(
                                                        (subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={
                                                                        subItem.link
                                                                    }
                                                                >
                                                                    {
                                                                        subItem.name
                                                                    }
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </li>
                                    )
                            )}
                        </ul>
                    </Nav>

                    {/* BÊN PHẢI */}
                    <Nav id={menuHeaderRight}>
                        <ul className={menuHeader}>
                            {user ? (
                                <UserSuccess logOut={logOut} />
                            ) : (
                                <li>
                                    <Link to='/login'>
                                        <BsPerson size={24} className='me-2' />
                                        Đăng nhập
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
