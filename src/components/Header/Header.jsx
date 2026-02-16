import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsChevronDown, BsPerson } from 'react-icons/bs';
import styles from './styles.module.css';
import { MenuHeader } from '@contans/contans';
function Header() {
    const { menuHeaderRight, menuHeader, subMenu, menuItem } = styles;
    return (
        <Navbar bg='white' expand='lg' className='py-2'>
            <Container>
                {/* Logo */}
                <Navbar.Brand href='#' className='me-auto'>
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
                                                item.submenu === true
                                                    ? menuItem
                                                    : ''
                                            }
                                        >
                                            <a href={item.link}>
                                                {item.name}
                                                {item.submenu === true && (
                                                    <BsChevronDown
                                                        size={16}
                                                        className='ms-1'
                                                    />
                                                )}
                                            </a>

                                            {item.submenu === true &&
                                                item.right !== true && (
                                                    <ul className={subMenu}>
                                                        {item.subMenu?.map(
                                                            (
                                                                subItem,
                                                                subIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                >
                                                                    <a
                                                                        href={
                                                                            subItem.link
                                                                        }
                                                                    >
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </a>
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
                    {/* LOGIN PHẢI */}
                    <Nav id={menuHeaderRight}>
                        <ul className={menuHeader}>
                            {MenuHeader.map(
                                (item, index) =>
                                    index === MenuHeader.length - 1 && (
                                        <li>
                                            <a href={item.link}>
                                                <BsPerson
                                                    size={24}
                                                    className='me-2'
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                            )}
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
