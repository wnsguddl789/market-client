import React from 'react';
import { PostDetailView } from '../views';
import { PostDetailViewModel } from '../viewModels';

import { observer } from 'mobx-react';

interface Props {
  viewModel: PostDetailViewModel;
  post: string;
}

export const PostDetailViewController: React.FunctionComponent<Props> = observer(({ viewModel, post }) => {
  return <PostDetailView post={post} />;
});
