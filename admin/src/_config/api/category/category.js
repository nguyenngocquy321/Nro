import api from '../axios';
const createCategory = async (name, desc, slug, bgUrl, title) => {
  try {
    const res = await api.post('/category/create', { name, desc, slug, bgUrl, title });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { createCategory };
