import { Navbar, Button } from 'react-bootstrap';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
        <Navbar bg='white' className='shadow-sm px-4 py-3'>
            <Navbar.Brand>Admin Dashboard</Navbar.Brand>

            <Navbar.Collapse className='justify-content-end'>
                <span className='me-3'>Xin chào, Admin</span>
                <Button variant='danger' size='sm' onClick={handleLogout}>
                    Đăng xuất
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
