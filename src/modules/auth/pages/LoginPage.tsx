import { hasChildren } from 'types';
import { LoginViewController } from '../viewControllers';
import { LoginViewModel } from '../viewModels';
import { AuthStore } from '../store';

const authStore = new AuthStore();

export const LoginPage: React.FunctionComponent = () => {
  const viewModel = new LoginViewModel(authStore);

  return <LoginViewController viewModel={viewModel} />;
};
