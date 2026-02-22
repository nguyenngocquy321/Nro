import { routes, routesAdmin } from './routes/routes.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { useEffect, useState } from 'react';
import { auth, db } from '@config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '@contexts/AuthContext.jsx';
import { ToastMessgeProvider } from '@contexts/ToastMessgeContext/ToastMessgeContext.jsx';
import { NapCardProvider } from '@contexts/NapCardProvider.jsx';

function App() {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            if (!user) {
                setRole(null);
                setLoading(false);
                return;
            }

            try {
                const snap = await getDoc(doc(db, 'users', user.uid));

                if (snap.exists()) {
                    setRole(snap.data().role);
                } else {
                    setRole('user');
                }
            } catch (error) {
                console.log('ROLE ERROR:', error);
                setRole('user');
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return null; // hoặc spinner

    return (
        <AuthProvider>
            <NapCardProvider>
                <ToastMessgeProvider>
                    <Routes>
                        {/* USER ROUTES */}
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <Header />
                                        {route.element}
                                        <Footer />
                                    </>
                                }
                            />
                        ))}

                        {/* ADMIN ROUTES */}
                        {routesAdmin.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    role === 'admin' ? (
                                        route.element
                                    ) : (
                                        <Navigate to='/' replace />
                                    )
                                }
                            />
                        ))}
                    </Routes>
                </ToastMessgeProvider>
            </NapCardProvider>
        </AuthProvider>
    );
}

export default App;
