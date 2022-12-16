import React from 'react';

import SnapContentFooter from '.';

export default {
  title: 'Components/App/Flask/SnapContentFooter',
  id: 'ui-components-app-flask-snap-content-footer-snap-content-footer',
  component: SnapContentFooter,
  args: {
    snapName: 'Test Snap',
    snapId: 'local:test-snap',
  },
};

export const DefaultStory = (args) => <SnapContentFooter {...args} />;

DefaultStory.storyName = 'Default';
