import api from '../axios';
const getUser = async id => api.get(`/user/${id}`);
export { getUser };
