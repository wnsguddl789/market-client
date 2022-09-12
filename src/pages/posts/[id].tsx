import React from 'react';
import fs from 'fs';
import { GetStaticPropsContext } from 'next';
import { Provider as MobxProvider } from 'mobx-react';

import axiosInstance from 'utils/api';
import { ItemService, PostDetailPage, PostRootStore, postType } from 'modules';

interface Props {
  post: postType;
}

const options = {
  [PostRootStore.type.POST_MODEL]: {
    service: ItemService.createInstance(axiosInstance),
  },
};

export default function Index(props: any) {
  const [postRootStore] = React.useState(PostRootStore.createInstance(options));
  return (
    <MobxProvider {...postRootStore.getStores()}>
      <PostDetailPage {...props} />
    </MobxProvider>
  );
}

export async function getStaticProps({ params: { id } }: GetStaticPropsContext) {
  try {
    const post = fs.readFileSync(`public/posts/${id}/${id}.md`).toString();

    return {
      props: { post },
    };
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const posts = fs.readdirSync('public/posts').map((file) => file.split('.')[0]);

    const paths = posts
      .filter((file) => file.match(/\.md$/))
      .map((post) => ({
        params: {
          id: post,
        },
      }));

    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error(err);
  }
}
