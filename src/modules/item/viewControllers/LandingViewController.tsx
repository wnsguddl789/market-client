import React from 'react';
import { LandingView } from '../views';
import { LandingViewModel } from '../viewModels';
import { itemType, CreateItemDto } from '../types';

import { observer } from 'mobx-react';

interface Props {
  viewModel: LandingViewModel;
  items: itemType[];
}

export const LandingViewController = observer(({ viewModel }: Props) => {
  const items = viewModel.getItems();

  const createItem = async (value: CreateItemDto) => {
    const {} = await viewModel.createItem(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createItem({
      name: '아이템',
      price: 28900,
      stock: 500,
      discount: 10,
      src: 'https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp',
    });
  };

  return <LandingView onSubmit={onSubmit} items={items} />;
});
