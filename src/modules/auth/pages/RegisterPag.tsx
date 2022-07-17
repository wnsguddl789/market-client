import { hasChildren } from 'types';
import { RegisterViewController } from '../viewControllers';
import { RegisterViewModel } from '../viewModels';
import { AuthStore } from '../store';

const authStore = new AuthStore();

export const RegisterPage: React.FunctionComponent = () => {
  const viewModel = new RegisterViewModel(authStore);
  return <RegisterViewController viewModel={viewModel} />;
};
