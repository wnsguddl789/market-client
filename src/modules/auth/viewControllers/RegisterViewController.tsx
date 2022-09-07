import React from 'react';
import { RegisterView } from '../views';
import { RegisterViewModel } from '../viewModels';
import { RegisterAction } from '../types';
import { useForm } from 'react-hook-form';

interface Props {
  viewModel: RegisterViewModel;
}

export const RegisterViewController: React.FC<Props> = ({ viewModel }) => {
  const { register, handleSubmit } = useForm<RegisterAction>({});

  const onSubmit = handleSubmit(async (value) => {
    const { data, status } = await viewModel.handleRegisterAction(value);
    if (status >= 400) {
      alert(data?.message);
    }
  });
  return <RegisterView onSubmit={onSubmit} register={register} />;
};
