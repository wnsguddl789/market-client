import React from 'react';
import { LoginView } from '../views';
import { LoginAction } from '../types';
import { useForm, Resolver } from 'react-hook-form';

interface LoginViewControllerProps {
  viewModel?: any;
}

export const LoginViewController: React.FunctionComponent<LoginViewControllerProps> = ({ viewModel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginAction>({});

  const validateValues = (value: LoginAction) => {
    const { length } = Object.values(value).filter((el) => el.replace(' ', '') !== '');
    return length !== 0;
  };

  const onSubmit = handleSubmit(async (value: LoginAction) => {
    if (validateValues(value)) {
      const result = await viewModel.handleLoginAction(value);
      console.log(result);
    }
  });
  return <LoginView onSubmit={onSubmit} register={register} errors={errors} />;
};
