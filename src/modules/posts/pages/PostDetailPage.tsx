import React from 'react';
import { inject } from 'mobx-react';
import { PostRootStore } from '../store';
import { PostDetailViewController } from '../viewControllers';
import { PostListViewModel } from '../viewModels';

const PostDetailMediator = ({ post, ...props }) => {
  const viewModel = new PostListViewModel(props[PostRootStore.type.POST_MODEL]);

  React.useEffect(() => {
    const postStore = props[PostRootStore.type.POST_MODEL];
    postStore.setPost(post);
  }, []);

  return <PostDetailViewController viewModel={viewModel} post={post} />;
};

export const PostDetailPage = inject(PostRootStore.type.POST_MODEL)(PostDetailMediator);
