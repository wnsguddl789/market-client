import React from 'react';
import Link from 'next/link';
import { Form, FormItem } from '../style/Form.style';

interface RegisterViewProps {
  onSubmit: () => void;
  register: any;
  errors: any;
}

export const RegisterView: React.FunctionComponent<RegisterViewProps> = ({ onSubmit, register, errors }) => (
  <Form onSubmit={onSubmit}>
    <FormItem>
      <label>아이디</label>
      <input {...register('email')} placeholder="Email@email.com" type={'email'} />
    </FormItem>
    <FormItem>
      <label>패스워드</label>
      <input {...register('password')} placeholder="Password" type={'password'} />
    </FormItem>
    <FormItem>
      <label>패스워드 확인</label>
      <input {...register('passwordRepeat')} placeholder="PasswordRepeat" type={'password'} />
    </FormItem>
    <FormItem>
      <label>성명</label>
      <input {...register('name')} placeholder="이름" type={'text'} />
    </FormItem>
    <FormItem>
      <button type="submit">회원가입</button>
    </FormItem>
    <FormItem>
      <span>
        계정이 있으신가요? <Link href={'/auth/login'}>로그인</Link>
      </span>
    </FormItem>
  </Form>
);
