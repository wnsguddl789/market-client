import React from 'react';
import Link from 'next/link';
import { Form, FormItem } from '../style/Form.style';

import { LoginAction } from '../types';
import { UseFormRegister, FormState } from 'react-hook-form';

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<LoginAction>;
}

export const LoginView: React.FC<Props> = ({ onSubmit, register }) => (
  <Form onSubmit={onSubmit}>
    <FormItem>
      <label>아이디</label>
      <input {...register('email')} placeholder="email" type={'email'} />
    </FormItem>
    <FormItem>
      <label>패스워드</label>
      <input {...register('password')} placeholder="password" type={'password'} />
    </FormItem>
    <FormItem>
      <button type="submit">로그인</button>
    </FormItem>
    <FormItem>
      <span>
        계정이 없으신가요? <Link href={'/auth/register'}>회원가입</Link>
      </span>
    </FormItem>
  </Form>
);
