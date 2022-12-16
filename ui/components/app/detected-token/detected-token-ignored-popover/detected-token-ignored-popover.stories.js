import React from 'react';

import DetectedTokenIgnoredPopover from './detected-token-ignored-popover';

export default {
  title: 'Components/App/DetectedToken/DetectedTokenIgnoredPopover',
  id: 'ui-components-app-detected-token-detected-token-ignored-popover-detected-token-ignored-popover',
  argTypes: {
    onCancelIgnore: {
      control: 'func',
    },
    handleClearTokensSelection: {
      control: 'func',
    },
  },
};

const Template = (args) => {
  return <DetectedTokenIgnoredPopover {...args} />;
};

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';
