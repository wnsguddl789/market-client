import axios from 'utils/api';

import { postType } from '../types';

const CREATE_ITEM = async (value: postType) => {
  return await axios.post('/item', value);
};
const fetchItems = async (axiosInstance: any) => {
  return await axiosInstance.get('/item/list');
};

export { CREATE_ITEM, fetchItems };
