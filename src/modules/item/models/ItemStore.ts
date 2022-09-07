import { itemType, CreateItemDto } from '../types';
import { observable, action, makeAutoObservable, IObservableArray } from 'mobx';
import { ItemService } from '../shared';

interface optionsType {
  service?: ItemService;
}
export class ItemStore {
  name: string;
  service: ItemService;
  items: IObservableArray<itemType>;
  item: itemType;

  constructor(modelName: string, options: optionsType) {
    this.name = modelName;
    this.service = options.service;
    this.items = observable.array([]);

    makeAutoObservable(this, {
      items: observable,
      item: observable,
      createItem: action,
    });
  }

  setItems(items: itemType[]) {
    this.items.replace(items);
  }

  getItems() {
    return this.items;
  }

  getItem() {
    return this.item;
  }

  async createItem(value: CreateItemDto) {
    await this.service.createItem(value);
  }
}
