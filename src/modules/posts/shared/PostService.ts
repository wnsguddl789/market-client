import { fetchItems } from './PostListPageQuery';

export class ItemService {
  axiosInstance: any;
  constructor(axiosInstance: any) {
    this.axiosInstance = axiosInstance;
  }

  static createInstance(axiosInstance: any) {
    return new ItemService(axiosInstance);
  }

  async fetchItems() {
    return await fetchItems(this.axiosInstance);
  }
}
