import { RegisterAction } from '../types';
import { AuthStore } from '../store';
export class RegisterViewModel {
  AuthStore: AuthStore;

  constructor(store: AuthStore) {
    this.AuthStore = store;
  }

  async handleRegisterAction(value: RegisterAction) {
    return await this.AuthStore.handleRegisterAction(value);
  }
}
