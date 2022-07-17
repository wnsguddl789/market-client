import { RegisterAction } from '../types';
import axios from 'axios';

const MUTATION_REGISTER_ACTION = async ({ email, password, name }: RegisterAction) => {
  return await axios({
    url: `${process.env.NEXT_PUBLIC_END_POINT}/user`,
    method: 'POST',
    data: { email, password, name },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ request: { data, status } }) => ({ data, status }))
    .catch(({ message, response: { data, status } }) => ({ message, data, status }));
};

export { MUTATION_REGISTER_ACTION };
