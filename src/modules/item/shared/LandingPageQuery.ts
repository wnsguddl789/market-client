import axios from 'utils/api';
import { AxiosInstance } from 'axios';

import { itemType } from '../types';

const CREATE_ITEM = async (value: itemType) => {
  return await axios.post('/item', value);
};
const fetchItems = async (axiosInstance: AxiosInstance) => {
  return await axiosInstance.get('/item/list');
};

export { CREATE_ITEM, fetchItems };
