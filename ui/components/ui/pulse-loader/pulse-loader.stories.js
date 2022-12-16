import React from 'react';
import README from './README.mdx';
import PulseLoader from '.';

export default {
  title: 'Components/UI/PulseLoader',
  id: 'ui-components-ui-pulse-loader-pulse-loader',
  component: PulseLoader,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export const DefaultStory = () => <PulseLoader />;

DefaultStory.storyName = 'Default';
