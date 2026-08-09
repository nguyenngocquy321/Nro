import { create } from 'zustand';
const useMenuStore = create((set) => ({
  menu: 1,
  changeMenu: (state) => set({ menu: state }),
}));

export default useMenuStore;
