import { enableStaticRendering } from 'mobx-react';
import { ItemStore } from './models/ItemStore';
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

export class ItemRootStore {
  itemModel: ItemStore;

  static createInstance(options = {}) {
    const defaultOptions = { ...defaults, ...options };
    return new ItemRootStore(defaultOptions);
  }
  constructor(options: StoreOptionsType) {
    if (options) {
      this.itemModel = new ItemStore(ItemRootStore.type.ITEM_MODEL, options[ItemRootStore.type.ITEM_MODEL]);
    }
  }
  static type = {
    ITEM_MODEL: 'itemModel',
  };

  getStores() {
    return {
      [ItemRootStore.type.ITEM_MODEL]: this.itemModel,
    };
  }
}
