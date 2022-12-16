import React from 'react';
import ConfirmPageContainerWarning from '.';

export default {
  title: 'Components/UI/ConfirmPageContainerWarning', // title should follow the folder structure location of the component. Don't use spaces.
  id: 'ui-components-app-confirm-page-container-confirm-page-container-content-confirm-page-container-warning-confirm-page-container-warning',
  argTypes: {
    warning: {
      control: 'text',
    },
  },
  args: {
    warning: 'This is a warning',
  },
};

export const DefaultStory = (args) => <ConfirmPageContainerWarning {...args} />;

DefaultStory.storyName = 'Default';
