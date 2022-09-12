import { postType } from '../types';
import { observable, action, makeAutoObservable, IObservableArray } from 'mobx';
import { ItemService } from '../shared';

interface optionsType {
  service?: ItemService;
}
export class PostStore {
  name: string;
  service: ItemService;
  posts: IObservableArray<postType>;
  post: postType;

  constructor(modelName: string, options: optionsType) {
    this.name = modelName;
    this.service = options.service;
    this.posts = observable.array([]);

    makeAutoObservable(this, {
      posts: observable,
      post: observable,
    });
  }

  setItems(post: postType[]) {
    this.posts.replace(post);
  }

  setPost(post: postType) {
    this.post = post;
  }

  getItems() {
    return this.posts;
  }

  getItem() {
    return this.post;
  }
}
