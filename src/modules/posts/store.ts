import { enableStaticRendering } from 'mobx-react';
import { PostStore } from './models';
import { ItemService } from './shared';

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

const defaults = {
  service: null,
};

interface StoreOptionsType {
  service: ItemService;
  itemModel?: string;
}

export class PostRootStore {
  postModel: PostStore;

  static createInstance(options = {}) {
    const defaultOptions = { ...defaults, ...options };
    return new PostRootStore(defaultOptions);
  }
  constructor(options: StoreOptionsType) {
    if (options) {
      this.postModel = new PostStore(PostRootStore.type.POST_MODEL, options[PostRootStore.type.POST_MODEL]);
    }
  }
  static type = {
    POST_MODEL: 'postModel',
  };

  getStores() {
    return {
      [PostRootStore.type.POST_MODEL]: this.postModel,
    };
  }
}
