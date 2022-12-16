import React from 'react';
import Welcome from './welcome.component';

export default {
  title: 'Pages/FirstTimeFlow/Welcome',
  id: 'ui-pages-first-time-flow-welcome-welcome',
};

export const DefaultStory = () => {
  return <Welcome />;
};

DefaultStory.storyName = 'Default';
