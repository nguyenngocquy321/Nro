import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
            if (!firebaseUser) {
                setUser(null);

                if (
                    location.pathname === '/nap-card' ||
                    location.pathname.startsWith('/admin')
                ) {
                    navigate('/login', { replace: true });
                }

                return;
            }

            try {
                const docRef = doc(db, 'users', firebaseUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();

                    const userData = {
                        id: firebaseUser.uid,
                        email: firebaseUser.email,
                        KM: data.KM,
                        role: data.role,
                    };

                    setUser(userData);
                    if (
                        location.pathname === '/login' ||
                        location.pathname === '/register'
                    ) {
                        if (data.role === 'admin') {
                            navigate('/admin', { replace: true });
                        } else {
                            navigate('/', { replace: true });
                        }
                    }
                    if (
                        location.pathname.startsWith('/admin') &&
                        data.role !== 'admin'
                    ) {
                        navigate('/', { replace: true });
                    }
                }
            } catch (error) {
                console.log('Lỗi lấy user:', error);
            }
        });

        return unsubscribe;
    }, [navigate, location.pathname]);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
