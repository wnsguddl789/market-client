import React from 'react';
import { inject } from 'mobx-react';
import { ItemRootStore } from '../store';
import { LandingViewController } from '../viewControllers';
import { LandingViewModel } from '../viewModels/LandingViewModel';

export const LandingMediator = ({ items, ...props }) => {
  const viewModel = new LandingViewModel(props[ItemRootStore.type.ITEM_MODEL]);

  React.useEffect(() => {
    const itemStore = props[ItemRootStore.type.ITEM_MODEL];
    itemStore.setItems(items);
  }, []);

  return <LandingViewController viewModel={viewModel} items={items} />;
};

export const LandingPage = inject(ItemRootStore.type.ITEM_MODEL)(LandingMediator);
