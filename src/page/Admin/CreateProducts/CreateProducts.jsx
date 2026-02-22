import { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { db } from '@config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import DefaultAdmin from '../../../components/Admin/DefaultAdmin';

function CreateProducts() {
    const [title, setTitle] = useState('');
    const [imageBase64, setImageBase64] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    // 🔥 Convert file sang base64
    const convertToBase64 = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    // xử lý chọn ảnh
    const handleImageChange = async e => {
        const file = e.target.files[0];
        if (!file) return;

        // 🚨 Giới hạn 300KB
        if (file.size > 500000) {
            alert('Ảnh quá lớn (tối đa 500KB)');
            return;
        }

        try {
            const base64 = await convertToBase64(file);
            setImageBase64(base64);
            setPreview(base64);
        } catch (error) {
            console.error(error);
        }
    };

    const addProduct = async e => {
        e.preventDefault();

        if (!title || !imageBase64) {
            alert('Vui lòng nhập đủ thông tin');
            return;
        }

        try {
            setLoading(true);

            await addDoc(collection(db, 'products'), {
                title,
                image: imageBase64,
                createdAt: serverTimestamp(),
            });

            alert('Thêm sản phẩm thành công!');

            // reset form
            setTitle('');
            setImageBase64(null);
            setPreview(null);
        } catch (error) {
            console.error(error);
            alert('Có lỗi xảy ra!');
        } finally {
            setLoading(false);
        }
    };

    return <DefaultAdmin />;
}

export default CreateProducts;
