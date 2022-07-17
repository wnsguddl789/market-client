import { LoginAction } from '../types';

const validateValues = (value: LoginAction) => {
  const { length } = Object.values(value).filter((el) => el.replace(' ', '') !== '');
  return length !== 0;
};

export { validateValues };
