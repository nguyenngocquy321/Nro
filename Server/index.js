require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const md5 = require('md5');

const app = express();

app.use(cors());
app.use(express.json());

/* ================= CONFIG ================= */

const PARTNER_ID = process.env.PARTNER_ID;
const PARTNER_KEY = process.env.PARTNER_KEY;
const DOMAIN_POST = 'https://thesieure.com'; // đổi lại domain thật

/* ================= API NẠP THẺ ================= */
app.post('/api/napthe', async (req, res) => {
    try {
        const { telco, amount, serial, code, request_id } = req.body;

        const sign = md5(PARTNER_KEY + code + serial);

        const payload = {
            telco,
            code,
            serial,
            amount,
            request_id,
            partner_id: PARTNER_ID,
            sign,
            command: 'charging',
        };

        const response = await axios.post(
            `${DOMAIN_POST}/chargingws/v2`,
            payload,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );

        console.log('NAPTHE RESPONSE:', response.data);
        return res.json({
            success: true,
            data: response.data,
        });
    } catch (error) {
        console.error('NAPTHE ERROR:', error.response?.data || error.message);

        return res.status(500).json({
            success: false,
            message: 'Lỗi gửi thẻ',
        });
    }
});

app.post('/api/check', async (req, res) => {
    try {
        const { telco, amount, serial, code, request_id } = req.body;

        const sign = md5(PARTNER_KEY + code + serial);

        const payload = {
            telco,
            code,
            serial,
            amount,
            request_id,
            partner_id: PARTNER_ID,
            sign,
            command: 'check',
        };

        const response = await axios.post(
            `${DOMAIN_POST}/chargingws/v2`,
            payload,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );

        const result = response.data;

        if (result.status === 1) {
            return res.json({
                success: true,
                message: 'Nạp thẻ thành công',
                data: result,
            });
        }

        if (result.status === 99) {
            return res.json({
                success: false,
                pending: true,
                message: 'Thẻ đang xử lý',
                data: result,
            });
        }

        return res.json({
            success: false,
            message: 'Nạp thẻ thất bại',
            data: result,
        });
    } catch (error) {
        console.error('CHECK ERROR:', error.response?.data || error.message);

        return res.status(500).json({
            success: false,
            message: 'Lỗi check thẻ',
        });
    }
});

/* ================= START SERVER ================= */

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
