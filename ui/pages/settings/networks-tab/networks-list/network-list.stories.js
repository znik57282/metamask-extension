import React from 'react';
import testData from '../../../../../.storybook/test-data';
import NetworksList from './networks-list';

export default {
  title: 'Pages/Settings/NetworksTab/NetworksList',
  id: 'ui-pages-settings-networks-tab-networks-list-network-list',
  argTypes: {
    networkDefaultedToProvider: {
      control: 'boolean',
    },
    networkIsSelected: {
      control: 'boolean',
    },
    networksToRender: {
      control: 'array',
    },
  },
  args: {
    networkDefaultedToProvider: false,
    networkIsSelected: false,
    networksToRender: testData.networkList,
  },
};

export const NetworksListComponent = (args) => {
  return <NetworksList {...args} />;
};
