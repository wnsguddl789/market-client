import React from 'react';
import { PostListView } from '../views';
import { PostListViewModel } from '../viewModels';
import { postType } from '../types';
import { useRouter } from 'next/router';

import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useTheme } from '@emotion/react';

interface Props {
  viewModel: PostListViewModel;
  fileList: postType[];
}

export const PostListViewController = observer(({ viewModel }: Props) => {
  const router = useRouter();
  const fileList = toJS(viewModel.getItems());

  const { color } = useTheme();

  const handelClickToPost = (id: number) => {
    router.push(`/posts/${id}`);
  };

  return <PostListView fileList={fileList} color={color} handelClickToPost={handelClickToPost} />;
});
