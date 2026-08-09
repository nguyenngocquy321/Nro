import api from '../axios';
const cloudinaryUpload = async (fileToUpload) => {
  try {
    const res = await api.post('/upload/category', fileToUpload);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default cloudinaryUpload;
