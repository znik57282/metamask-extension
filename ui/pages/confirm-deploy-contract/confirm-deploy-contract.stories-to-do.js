/* eslint-disable react/prop-types */
import React from 'react';
import ConfirmDeployContract from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Pages/ConfirmDeployContract',
  id: 'ui-pages-confirm-deploy-contract-confirm-deploy-contract',
  component: ConfirmDeployContract,
  argTypes: {
    txData: {
      control: {
        type: 'object',
      },
    },
  },
};

export const DefaultStory = (args) => {
  return <ConfirmDeployContract {...args} />;
};

DefaultStory.storyName = 'Default';
