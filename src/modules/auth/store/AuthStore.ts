import { MUTATION_LOGIN_ACTION, MUTATION_REGISTER_ACTION } from '../shared';
import { LoginAction, RegisterAction } from '../types';
export class AuthStore {
  constructor() {}

  async handleLoginAction(value: LoginAction) {
    const { data, status } = await MUTATION_LOGIN_ACTION(value);
    return { data, status };
  }
  async handleRegisterAction(value: RegisterAction) {
    const { data, status } = await MUTATION_REGISTER_ACTION(value);
    return { data, status };
  }
}
