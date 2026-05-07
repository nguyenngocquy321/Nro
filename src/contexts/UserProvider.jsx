import {
    EmailAuthProvider,
    getAuth,
    onAuthStateChanged,
    reauthenticateWithCredential,
    signOut,
    updatePassword,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '@config/api/user/user';
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const auth = getAuth();
    const [isUser, setIsUser] = useState(false);
    const [user, setUser] = useState({});
    const [statusChanglePassword, setstatusChanglePassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.error('lỗi', error);
            });
    };
    const changePassword = async (oldPassword, newPassword) => {
        setLoading(true);
        const userData = auth.currentUser;
        console.log(userData.email);
        try {
            const credential = EmailAuthProvider.credential(
                userData.email,
                oldPassword
            );
            await reauthenticateWithCredential(userData, credential);
            await updatePassword(userData, newPassword);
            setLoading(false);
            return true;
        } catch (error) {
            console.error('Lỗi đổi mật khẩu:', error);
            setLoading(false);
            return false;
        }
    };
    useEffect(() => {
        if (location.pathname === '/login') {
            logOut();
        }

        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            if (currentUser) {
                setIsUser(true);
                const data = await getUser(currentUser.uid);
                const response = await getUser(currentUser.uid);
                setUser(response.data);
            } else {
                setIsUser(false);
            }
        });

        return () => unsubscribe();
    }, [location.pathname, navigate]);
    const value = {
        user,
        isUser,
        logOut,
        changePassword,
        loading,
        statusChanglePassword,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
