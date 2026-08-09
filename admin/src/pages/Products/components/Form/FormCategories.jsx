import React, { useContext, useState } from 'react';
import { dataRouter } from '../../contans/contans';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import SelectInput from '../SelectInput/SelectInput';
import { ToastMessgeContext } from '../../../../contexts/ToastMessgeProvider';
import useCategoryStore from '@/store/uploadCategoryStore';
const CategorySchema = Yup.object().shape({
  title: Yup.string().min(2, 'Quá ngắn!').required('Vui lòng nhập tên thể loại'),
  name: Yup.string().required('Vui lòng nhập tên con thể loại'),
  bgUrl: Yup.mixed().required('Vui lòng chọn ảnh nền'),
  slug: Yup.string().required('Vui lòng chọn đường dẫn'),
});
function FormCategories() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const { toast } = useContext(ToastMessgeContext);
  const createCategory = useCategoryStore((state) => state.createCategory);
  const loading = useCategoryStore((state) => state.loading);
  const handleFileChange = (e, setFieldValue) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setFieldValue('bgUrl', selectedFile);
    }
  };
  const handleSubmit = async (values) => {
    if (!file) {
      toast.warning('Vui lòng chọn ảnh nền');
      return;
    }
    const uploadData = new FormData();
    uploadData.append('file', file);

    const data = await createCategory(values, uploadData);
    if (data && data.success) {
      toast.success('Tạo thể loại thành công');
    } else {
      toast.error('Tạo thể loại thất bại');
    }
  };
  return (
    <>
      <Formik
        initialValues={{ title: '', name: '', desc: '', bgUrl: '', slug: '' }}
        validationSchema={CategorySchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  {/* Tên thể loại */}
                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700" htmlFor="title">
                      Tiêu đề
                    </label>
                    <Field
                      name="title"
                      id="title"
                      className="w-full rounded-md border border-gray-300 p-2.5 outline-none focus:border-indigo-500"
                      placeholder="Tiêu đề"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">
                      Tên
                    </label>
                    <Field
                      name="name"
                      id="name"
                      className="w-full rounded-md border border-gray-300 p-2.5 outline-none focus:border-indigo-500"
                      placeholder="Tên"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>

                  {/* Nội dung */}
                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700" htmlFor="desc">
                      Nội dung
                    </label>
                    <Field
                      as="textarea"
                      name="desc"
                      rows="3"
                      className="w-full rounded-md border border-gray-300 p-2.5 outline-none focus:border-indigo-500"
                      id="desc"
                    />
                    <ErrorMessage
                      name="desc"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>

                  {/* Upload Ảnh */}
                  <div className="flex w-full items-center justify-center">
                    <label className="flex h-32 w-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                      {preview ? (
                        <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <p className="text-sm font-semibold text-gray-500">Click để tải lên</p>
                        </div>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setFieldValue)}
                      />
                    </label>
                  </div>
                  <ErrorMessage
                    name="bgUrl"
                    component="div"
                    className="mt-2 text-center text-xs text-red-500"
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-bold text-gray-800">Chọn đường dẫn</h2>
                  <SelectInput
                    data={dataRouter}
                    value={values.slug}
                    onChange={(val) => setFieldValue('slug', val)}
                  />

                  <ErrorMessage name="slug" component="div" className="mt-1 text-xs text-red-500" />
                  <div className="flex flex-col gap-3">
                    <Button
                      name={loading ? 'loading...' : 'Tạo thể loại'}
                      bg="bg-emerald-600"
                      hover="hover:bg-emerald-700"
                      isType={false}
                      loading={loading}
                    />
                    <Button name="Hủy" type="submit" textColor="text-dark" href="/products" />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormCategories;
