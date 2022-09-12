import React from 'react';
import { inject } from 'mobx-react';
import { PostRootStore } from '../store';
import { PostListViewController } from '../viewControllers';
import { PostListViewModel } from '../viewModels';

const PostListMediator = ({ fileList, ...props }) => {
  const viewModel = new PostListViewModel(props[PostRootStore.type.POST_MODEL]);

  React.useEffect(() => {
    const postStore = props[PostRootStore.type.POST_MODEL];
    postStore.setItems(fileList);
  }, []);

  return <PostListViewController viewModel={viewModel} fileList={fileList} />;
};

export const PostListPage = inject(PostRootStore.type.POST_MODEL)(PostListMediator);
