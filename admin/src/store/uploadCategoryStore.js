import cloudinaryUpload from '@config/api/upload/uploadFile';
import { create } from 'zustand';
import { createCategory } from '@config/api/category/category';
const useCategoryStore = create((set) => ({
  loading: false,
  error: null,
  createCategory: async ({ title, name, desc, slug }, formData) => {
    set({ loading: true, error: null });
    try {
      const uploadResponse = await cloudinaryUpload(formData);

      const res = await createCategory(name, desc || '', slug, uploadResponse.secure_url, title);
      return res;
    } catch (error) {
      console.error('Error:', error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCategoryStore;
