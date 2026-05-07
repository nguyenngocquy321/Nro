import { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { auth, db } from '@config/firebase';
import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    serverTimestamp,
    limit,
} from 'firebase/firestore';
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const [error, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const addInfoUser = async data => {
        const url = 'http://localhost:3001/api/user';
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
        } catch (error) {
            console.error('lỗi', error);
        }
    };
    const registerUser = async (username, password, phone) => {
        setLoading(true);
        setErrors({});
        try {
            const email = `${username}@mt.com`;
            console.log(email);
            console.log(password);
            console.log(phone);

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            const data = {
                firebase_uid: user.uid,
                username: username,
                email: email,
                sdt: phone,
            };
            addInfoUser(data);
            setLoading(false);
            return { success: true };
        } catch (error) {
            console.error('Lỗi đăng ký:', error);
            setLoading(false);
            let errorMsg = 'Đã có lỗi xảy ra, vui lòng thử lại.';
            if (error.code === 'auth/email-already-in-use')
                errorMsg = 'Tài khoản này đã được sử dụng!';
            const errorObj = { message: errorMsg };
            setErrors(errorObj);
            return { success: false, error: errorObj };
        }
    };
    const loginUser = async (username, password) => {
        setLoading(true);
        setErrors({});
        try {
            const email = `${username}@mt.com`;
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            return { success: true };
            setLoading(false);
        } catch (error) {
            setLoading(false);
            return { success: false };
        }
    };
    const value = {
        registerUser,
        loginUser,
        loading,
        error,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
