import { PostStore } from '../models';

export class PostDetailViewModel {
  postStore: PostStore;
  constructor(store: PostStore) {
    this.postStore = store;
  }
  getItems() {
    return this.postStore.getItems();
  }
}
