export type LoginAction = {
  email: string;
  password: string;
};

export type RegisterAction = {
  email: string;
  password: string;
  passwordRepeat: string;
  name: string;
};
