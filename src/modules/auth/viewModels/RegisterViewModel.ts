import { RegisterAction } from '../types';

export class RegisterViewModel {
  [x: string]: any;

  constructor(store: any) {
    this.AuthStore = store;
  }

  async handleRegisterAction(value: RegisterAction) {
    return await this.AuthStore.handleRegisterAction(value);
  }
}
