import React from 'react';
import { PostDetailView } from '../views';
import { PostDetailViewModel } from '../viewModels';

import { observer } from 'mobx-react';

interface Props {
  viewModel: PostDetailViewModel;
  post: string;
}

export const PostDetailViewController = observer(({ viewModel, post }: Props) => {
  return <PostDetailView post={post} />;
});
