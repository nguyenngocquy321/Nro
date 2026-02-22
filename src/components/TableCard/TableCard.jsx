import { Button, Card, Spinner } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect } from 'react';
import { ToastMessgeContext } from '@contexts/ToastMessgeContext/ToastMessgeContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '@contexts/AuthContext';
import { NapCardContext } from '@contexts/NapCardProvider';
/* ================= VALIDATION ================= */
const validationSchema = Yup.object({
    telco: Yup.string().required('Vui lòng chọn loại thẻ'),
    amount: Yup.string().required('Vui lòng chọn mệnh giá'),
    serial: Yup.string()
        .required('Vui lòng nhập số serial')
        .matches(/^[0-9]+$/, 'Serial chỉ được chứa số')
        .min(5, 'Serial không hợp lệ'),
    code: Yup.string()
        .required('Vui lòng nhập mã thẻ')
        .matches(/^[0-9]+$/, 'Mã thẻ chỉ được chứa số')
        .min(5, 'Mã thẻ không hợp lệ'),
});

function TableCard() {
    const { toast } = useContext(ToastMessgeContext);
    const { user } = useContext(AuthContext);
    const {
        checkThe,
        status,
        handleNapThe,
        setStatus,
        payload,
        saveInfoNap,
        updateMoney,
    } = useContext(NapCardContext);
    const baseUrl = import.meta.env.VITE_BASE_URL;

    /* ======= ========== NẠP THẺ ================= */
    useEffect(() => {
        if (status == null) return;
        switch (status) {
            case 102:
                toast.error('Dữ liệu nhập không hợp lệ');
                break;
            case 99:
                toast.warning('Thẻ đang xử lý, vui lòng đợi ở lại 5s - 1 phút');
                setTimeout(() => {
                    checkThe(payload);
                }, 5000);

                break;
            case 100:
                toast.error('Gửi thẻ thất bại');
                break;
            case 4:
                toast.warning('Hệ thống đang bảo trì');
                break;
            case 3:
                toast.error('Thẻ lỗi');
                saveInfoNap(payload, status);
                break;

            case 2:
                toast.error('Sai mệnh giá');
                saveInfoNap(payload, status);
                break;

            case 1:
                toast.success('Nạp Thành Công');
                saveInfoNap(payload, status);
                break;

            default:
                return;
        }

        // 🔥 reset status để tránh spam
        setStatus(null);
    }, [status]);
    if (!user) {
        return (
            <Card className='shadow-sm p-4 text-center'>Chưa Đăng Nhập</Card>
        );
    }

    return (
        <Card className='shadow-sm'>
            <Card.Body>
                <Tabs defaultActiveKey='napThe' className='mb-3' fill>
                    <Tab eventKey='napThe' title='Nạp thẻ'>
                        <Formik
                            initialValues={{
                                telco: '',
                                amount: '',
                                serial: '',
                                code: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleNapThe}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                errors,
                                touched,
                                isSubmitting,
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    {/* TELCO */}
                                    <Form.Group className='mb-3 mt-3'>
                                        <Form.Select
                                            name='telco'
                                            value={values.telco}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={
                                                touched.telco && !!errors.telco
                                            }
                                        >
                                            <option value=''>
                                                Chọn loại thẻ
                                            </option>
                                            <option value='VIETTEL'>
                                                Viettel
                                            </option>
                                            <option value='MOBIFONE'>
                                                Mobifone
                                            </option>
                                            <option value='VINAPHONE'>
                                                Vinaphone
                                            </option>
                                            <option value='VTC'>VTC</option>
                                            <option value='GATE'>Gate</option>
                                            <option value='ZING'>Zing</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.telco}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* AMOUNT */}
                                    <Form.Group className='mb-3'>
                                        <Form.Select
                                            name='amount'
                                            value={values.amount}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={
                                                touched.amount &&
                                                !!errors.amount
                                            }
                                        >
                                            <option value=''>
                                                Chọn mệnh giá
                                            </option>
                                            <option value='10000'>
                                                10.000
                                            </option>
                                            <option value='20000'>
                                                20.000
                                            </option>
                                            <option value='50000'>
                                                50.000
                                            </option>
                                            <option value='100000'>
                                                100.000
                                            </option>
                                            <option value='200000'>
                                                200.000
                                            </option>
                                            <option value='500000'>
                                                500.000
                                            </option>
                                            <option value='1000000'>
                                                1.000.000
                                            </option>
                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.amount}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* SERIAL */}
                                    <Form.Group className='mb-3'>
                                        <Form.Control
                                            type='text'
                                            name='serial'
                                            placeholder='Nhập số serial'
                                            value={values.serial}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={
                                                touched.serial &&
                                                !!errors.serial
                                            }
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.serial}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* CODE */}
                                    <Form.Group className='mb-3'>
                                        <Form.Control
                                            type='text'
                                            name='code'
                                            placeholder='Nhập mã thẻ'
                                            value={values.code}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={
                                                touched.code && !!errors.code
                                            }
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.code}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button
                                        type='submit'
                                        className='w-100 py-2'
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Spinner
                                                    size='sm'
                                                    className='me-2'
                                                    animation='border'
                                                />
                                                Đang xử lý...
                                            </>
                                        ) : (
                                            'Nạp thẻ'
                                        )}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}

export default TableCard;
