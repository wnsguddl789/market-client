import React from 'react';
import { GetServerSideProps } from 'next';
import { Provider as MobxProvider } from 'mobx-react';

import axiosInstance from 'utils/api';
import { ItemService, LandingPage, ItemRootStore, itemType } from 'modules';

interface Props {
  items: itemType[];
}

export default function Index(props: Props) {
  const options = {
    [ItemRootStore.type.ITEM_MODEL]: {
      service: ItemService.createInstance(axiosInstance),
    },
  };
  const itemRootStore = ItemRootStore.createInstance(options);
  return (
    <MobxProvider {...itemRootStore.getStores()}>
      <LandingPage {...props} />
    </MobxProvider>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  try {
    const itemService = ItemService.createInstance(axiosInstance);
    const { data: items } = await itemService.fetchItems();

    return {
      props: { items },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
}
