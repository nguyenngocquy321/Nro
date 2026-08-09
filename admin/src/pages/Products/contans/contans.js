const categories = [
  { id: 'licenses', title: 'Licenses', count: 2 },
  { id: 'modules', title: 'Modules', count: 5 },
  { id: 'plans', title: 'Plans', count: 2 },
  { id: 'templates', title: 'Templates', count: 6 },
];
const listMenu = [
  {
    id: 1,
    name: 'Thể Loại',
  },
  {
    id: 2,
    name: 'Sản Phẩm',
  },
  {
    id: 3,
    name: 'Tài Khoản',
  },
];
const listItem = [{ name: 'All' }, { name: 'Active' }, { name: 'Draft' }, { name: 'Archived' }];
const Columns = [
  {
    id: 'ColumsProdcutsName',
    name: 'Name',
  },
  {
    id: 'ColumsProdcutsCategory',
    name: 'Category',
  },
  {
    id: 'ColumsProdcutsStatus',
    name: 'Status',
  },
  {
    id: 'ColumsProdcutsStock',
    name: 'Stock',
  },
  {
    id: 'ColumsProdcutsPrice',
    name: 'Price',
  },
  {
    id: 'ColumsProdcutsCreated',
    name: 'Created',
  },
];
const dataRouter = [
  {
    label: 'Chọn đường dẫn',
    value: '',
  },
  {
    label: '/pack-nick-ngoc-rong-vip',
    value: 'pack-nick-ngoc-rong-vip',
  },
  {
    label: '/pack-nick-so-sinh-ngon',
    value: 'pack-nick-so-sinh-ngon',
  },
  {
    label: '/ran-dom-50k',
    value: 'ran-dom-50k',
  },
];

export { categories, listItem, Columns, dataRouter, listMenu };
