import { ItemStore } from '../models/ItemStore';
import { CreateItemDto } from '../types';
export class LandingViewModel {
  itemStore: ItemStore;
  constructor(store: ItemStore) {
    this.itemStore = store;
  }
  getItems() {
    return this.itemStore.getItems();
  }
  createItem(value: CreateItemDto) {
    return this.itemStore.createItem(value);
  }
}
