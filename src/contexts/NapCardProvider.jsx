import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from 'react';
import { db } from '@config/firebase';
import {
    collection,
    addDoc,
    serverTimestamp,
    doc,
    updateDoc,
    increment,
    getDocs,
    query,
    where,
} from 'firebase/firestore';
import { AuthContext } from '@contexts/AuthContext';

export const NapCardContext = createContext();

export const NapCardProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState();
    const [payload, setPayload] = useState({});
    const [dataNap, setDataNap] = useState([]);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    /* ================= LƯU LỊCH SỬ ================= */
    const saveInfoNap = async (payload, status) => {
        if (!user) return;
        try {
            await addDoc(collection(db, 'LichSuNap'), {
                ...payload,
                userId: user.id,
                trangThai: status,
                createdAt: serverTimestamp(),
            });
        } catch (error) {
            console.log(error);
        }
    };
    /* ================= CẬP NHẬT SÔ TIỀN ================= */
    const updateMoney = async amount => {
        if (!user) return;
        try {
            const docRef = doc(db, 'users', user.id);

            await updateDoc(docRef, {
                KM: increment(Number(amount)),
                updatedAt: serverTimestamp(),
            });
        } catch (error) {
            console.log(error);
        }
    };
    const checkThe = async payload => {
        try {
            const res = await fetch(`${baseUrl}/api/check`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            const status = data.data?.status;
            setStatus(status);
        } catch (error) {
            console.error('lỗi', error);
        }
    };
    const handleNapThe = async value => {
        try {
            setLoading(true);
            const payload = {
                telco: value.telco,
                code: value.code,
                serial: value.serial,
                amount: Number(value.amount),
                request_id: Date.now(),
            };
            const res = await fetch('http://localhost:3000/api/napthe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            setPayload(payload);
            setStatus(data.data.status);
        } catch (error) {
            console.log('Lỗi nạp thẻ:', error);
            return null;
        } finally {
            setLoading(false);
        }
    };
    const getHistoryNap = useCallback(async () => {
        if (!user?.id) {
            setDataNap([]);
            return;
        }

        try {
            const q = query(
                collection(db, 'LichSuNap'),
                where('userId', '==', user.id)
            );

            const snapshot = await getDocs(q);

            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDataNap(data);
        } catch (error) {
            console.log('Lỗi lấy dữ liệu:', error);
            setDataNap([]);
        }
    }, [user]);
    useEffect(() => {
        getHistoryNap();
    }, [getHistoryNap]);

    const value = {
        checkThe,
        status,
        handleNapThe,
        setStatus,
        payload,
        saveInfoNap,
        updateMoney,
        dataNap,
    };
    return (
        <NapCardContext.Provider value={value}>
            {children}
        </NapCardContext.Provider>
    );
};
