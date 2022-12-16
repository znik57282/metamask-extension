import React from 'react';
import ConfirmationNetworkSwitch from '.';

export default {
  title: 'Pages/Confirmation/Components/ConfirmationNetworkSwitch',
  id: 'ui-pages-confirmation-components-confirmation-network-switch-confirmation-network-switch',
  argTypes: {
    newNetwork: {
      controls: 'object',
    },
  },
  args: {
    newNetwork: {
      chainId: 'chainId',
      name: 'Binance Smart Chain Mainnet',
    },
  },
};

export const DefaultStory = (args) => <ConfirmationNetworkSwitch {...args} />;

DefaultStory.storyName = 'Default';
