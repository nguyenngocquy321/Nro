import Home from '@page/Home.jsx';
import Test from '@page/Test.jsx';
import Login from '@page/Login.jsx';
import Register from '@page/Register';
import NapCard from '@page/NapCard';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/nap-card',
        element: <NapCard />,
    },
    {
        path: '/test',
        element: <Test />,
    },
];
export default routes;
