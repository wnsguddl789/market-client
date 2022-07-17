import React from 'react';
import { RegisterView } from '../views';
import { RegisterAction } from '../types';
import { useForm } from 'react-hook-form';

interface RegisterViewControllerProps {
  viewModel?: any;
}

export const RegisterViewController: React.FunctionComponent<RegisterViewControllerProps> = ({ viewModel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterAction>({});

  const onSubmit = handleSubmit(async (value) => {
    const { data, status } = await viewModel.handleRegisterAction(value);
    if (status >= 400) {
      alert(data?.message);
    }
  });
  return <RegisterView onSubmit={onSubmit} register={register} errors={errors} />;
};
