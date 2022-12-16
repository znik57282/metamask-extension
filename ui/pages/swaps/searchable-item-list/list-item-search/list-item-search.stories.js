import React from 'react';

import ListItemSearch from '.';

export default {
  title: 'Pages/Swaps/SearchableItemList/ListItemSearch',
  id: 'ui-pages-swaps-searchable-item-list-list-item-search-list-item-search',
  argTypes: {
    onSearch: {
      action: 'onSearch',
    },
    error: {
      control: 'text',
    },
    listToSearch: {
      control: 'select',
    },
    fuseSearchKeys: {
      control: 'select',
    },
    searchPlaceholderText: {
      control: 'text',
    },
    defaultToAll: {
      control: 'boolean',
    },
    shouldSearchForImports: {
      control: 'boolean',
    },
  },
};

export const DefaultStory = (args) => {
  return <ListItemSearch {...args} />;
};

DefaultStory.storyName = 'Default';
