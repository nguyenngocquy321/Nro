import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
    const location = useLocation();

    return (
        <div className='bg-dark text-white min-vh-100 p-3'>
            <h4 className='text-center mb-4'>ADMIN</h4>

            <Nav className='flex-column'>
                <Nav.Link
                    as={Link}
                    to='/admin'
                    className={
                        location.pathname === '/admin'
                            ? 'text-warning'
                            : 'text-white'
                    }
                >
                    📊 Dashboard
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to='/admin/users'
                    className={
                        location.pathname === '/admin/users'
                            ? 'text-warning'
                            : 'text-white'
                    }
                >
                    👤 Users
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to='/admin/products'
                    className={
                        location.pathname === '/admin/products'
                            ? 'text-warning'
                            : 'text-white'
                    }
                >
                    🛒 Products
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to='/admin/orders'
                    className={
                        location.pathname === '/admin/orders'
                            ? 'text-warning'
                            : 'text-white'
                    }
                >
                    📦 Orders
                </Nav.Link>

                <Nav.Link
                    as={Link}
                    to='/admin/settings'
                    className={
                        location.pathname === '/admin/settings'
                            ? 'text-warning'
                            : 'text-white'
                    }
                >
                    ⚙ Settings
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default SideBar;
