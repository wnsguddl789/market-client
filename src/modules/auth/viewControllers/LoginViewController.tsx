import React from 'react';
import { LoginView } from '../views';
import { LoginViewModel } from '../viewModels';
import { LoginAction } from '../types';
import { useForm } from 'react-hook-form';

interface Props {
  viewModel: LoginViewModel;
}

export const LoginViewController: React.FC<Props> = ({ viewModel }) => {
  const { register, handleSubmit } = useForm<LoginAction>({});

  const validateValues = (value: LoginAction) => {
    const { length } = Object.values(value).filter((el) => el.replace(' ', '') !== '');
    return length !== 0;
  };

  const onSubmit = handleSubmit(async (value: LoginAction) => {
    try {
      if (validateValues(value)) {
        const { data, status } = await viewModel.handleLoginAction(value);
      } else {
        throw new Error('로그인 에러입니다.');
      }
    } catch (error) {
      console.log(error);
    }
  });
  return <LoginView onSubmit={onSubmit} register={register} />;
};
