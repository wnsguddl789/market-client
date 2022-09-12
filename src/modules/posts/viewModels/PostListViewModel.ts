import { PostStore } from '../models';

export class PostListViewModel {
  postStore: PostStore;
  constructor(store: PostStore) {
    this.postStore = store;
  }
  getItems() {
    return this.postStore.getItems();
  }
}
