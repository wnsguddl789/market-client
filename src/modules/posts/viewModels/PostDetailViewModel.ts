import { PostStore } from '../models';
import { CreateItemDto } from '../types';
export class PostDetailViewModel {
  postStore: PostStore;
  constructor(store: PostStore) {
    this.postStore = store;
  }
  getItems() {
    return this.postStore.getItems();
  }
  createItem(value: CreateItemDto) {
    return this.postStore.createItem(value);
  }
}
