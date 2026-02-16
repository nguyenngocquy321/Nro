import routes from './routes/routes.jsx';
import { Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
function App() {
    return (
        <>
            <Header />
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
