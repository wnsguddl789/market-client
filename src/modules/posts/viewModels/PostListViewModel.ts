import { PostStore } from '../models';
import { CreateItemDto } from '../types';
export class PostListViewModel {
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
