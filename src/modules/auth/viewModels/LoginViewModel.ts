import axios from 'axios';

import { LoginAction } from '../types';

export class LoginViewModel {
  [x: string]: any;

  constructor(store: any) {
    this.AuthStore = store;
  }

  async handleLoginAction(value: LoginAction) {
    return await this.AuthStore.handleLoginAction(value);
  }
}
