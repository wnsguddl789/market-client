import { AxiosInstance } from 'axios';

import { CREATE_ITEM, fetchItems } from './PostListPageQuery';

export class ItemService {
  axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  static createInstance(axiosInstance: AxiosInstance) {
    return new ItemService(axiosInstance);
  }

  async fetchItems() {
    return await fetchItems(this.axiosInstance);
  }
}
