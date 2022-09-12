import React from 'react';
import { GetServerSideProps, GetStaticPropsContext } from 'next';
import { Provider as MobxProvider } from 'mobx-react';

import fs from 'fs';
import axiosInstance from 'utils/api';
import { ItemService, PostListPage, PostRootStore, postType } from 'modules';

interface Props {
  fileList: postType[];
}

const options = {
  [PostRootStore.type.POST_MODEL]: {
    service: ItemService.createInstance(axiosInstance),
  },
};

export default function Index(props: Props) {
  const [postRootStore] = React.useState(PostRootStore.createInstance(options));

  return (
    <MobxProvider {...postRootStore.getStores()}>
      <PostListPage {...props} />
    </MobxProvider>
  );
}

export async function getStaticProps() {
  try {
    const fileList = await fs.readdirSync(`public/posts`).map((directory) => {
      return JSON.parse(fs.readFileSync(`public/posts/${directory}/info.json`, 'utf-8'));
    });
    return {
      props: { fileList },
    };
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
}
