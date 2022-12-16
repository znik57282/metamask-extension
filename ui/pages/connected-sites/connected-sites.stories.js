import React from 'react';

import ConnectedSites from '.';

export default {
  title: 'Pages/ConnectedSites',
  id: 'ui-pages-connected-sites-connected-sites',
};

const PageSet = ({ children }) => {
  return children;
};

export const DefaultStory = () => {
  return (
    <PageSet>
      <ConnectedSites />
    </PageSet>
  );
};

DefaultStory.storyName = 'Default';
