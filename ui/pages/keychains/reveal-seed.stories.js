import React from 'react';
import RevealSeedPage from './reveal-seed';

export default {
  title: 'Pages/Keychains/RevealSeedPage',
  id: 'ui-pages-keychains-reveal-seed',
  argTypes: {
    requestRevealSeedWords: {
      action: 'requestRevealSeedWords',
    },
    history: {
      control: 'object',
    },
    mostRecentOverviewPage: {
      control: 'text',
    },
  },
};

export const DefaultStory = (args) => <RevealSeedPage {...args} />;

DefaultStory.storyName = 'Default';
