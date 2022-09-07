import { AuthStore } from '../store';
import { LoginAction } from '../types';

export class LoginViewModel {
  AuthStore: AuthStore;

  constructor(store: AuthStore) {
    this.AuthStore = store;
  }

  async handleLoginAction(value: LoginAction) {
    return await this.AuthStore.handleLoginAction(value);
  }
}
