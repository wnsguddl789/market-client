import { LoginAction } from '../types';
import axios from 'axios';

const MUTATION_LOGIN_ACTION = async ({ email, password }: LoginAction) => {
  return await axios({
    url: `${process.env.NEXT_PUBLIC_END_POINT}/user/login`,
    method: 'POST',
    data: { email, password },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ request: { data, status } }) => ({ data, status }))
    .catch(({ response: { data, status } }) => ({ data, status }));
};

export { MUTATION_LOGIN_ACTION };
