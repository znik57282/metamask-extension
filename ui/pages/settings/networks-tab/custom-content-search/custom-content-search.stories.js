import React from 'react';
import testData from '../../../../../.storybook/test-data';
import CustomContentSearch from './custom-content-search';

export default {
  title: 'Pages/Settings/NetworksTab/CustomContentSearch',
  id: 'ui-pages-settings-networks-tab-custom-content-search-custom-content-search',
  argTypes: {
    error: {
      control: 'text',
    },
    searchQueryInput: {
      control: 'text',
    },
    onSearch: {
      action: 'onSearch',
    },
  },
};

export const CustomContentSearchComponent = (args) => {
  return <CustomContentSearch {...args} networksList={testData.networkList} />;
};
