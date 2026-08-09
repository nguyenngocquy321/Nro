import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import { listMenu } from './contans/contans';
import useMenuStore from '@/store/menuStore';
import FormCategories from './components/Form/FormCategories';
import FormProduct from './components/Form/FormProduct';
import FormAccount from './components/Form/FormAccount';
import { useState } from 'react';

function CreateProducts() {
  const isMenu = useMenuStore((state) => state.menu);
  const changeMenu = useMenuStore((state) => state.changeMenu);
  const [title, setTitle] = useState('Tạo Thể Loại');
  const handleMenuChange = (menuId) => {
    changeMenu(menuId);
    switch (menuId) {
      case 1:
        setTitle('Tạo Thể Loại');
        break;
      case 2:
        setTitle('Tạo Sản Phẩm');
        break;
      case 3:
        setTitle('Tạo Tài Khoản');
        break;
      default:
        setTitle('Tạo Thể Loại');
    }
  };

  const renderForm = () => {
    switch (isMenu) {
      case 1:
        return <FormCategories />;
      case 2:
        return <FormProduct />;
      case 3:
        return <FormAccount />;
      default:
        return <FormCategories />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Breadcrumb nameParent={'Products'} nameChild={'Create Product'} isChild />

          <div className="mt-4">
            <ul className="flex items-center gap-2 text-sm font-medium">
              {listMenu.map((item) => {
                const isActive = isMenu === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`cursor-pointer rounded-lg px-3.5 py-2 transition-all duration-200 ${
                        isActive
                          ? 'bg-indigo-100 font-semibold text-indigo-700'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => handleMenuChange(item.id)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="mt-6">{renderForm()}</div>
      </div>
    </div>
  );
}

export default CreateProducts;
