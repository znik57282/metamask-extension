import React from 'react';
import EditableLabel from '.';

export default {
  title: 'Components/UI/EditableLabel',
  id: 'ui-components-ui-editable-label-editable-label',
  argTypes: {
    onSubmit: {
      action: 'onSubmit',
    },
    defaultValue: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    accountsNames: {
      control: 'array',
    },
  },
  args: {
    defaultValue: 'Account 3',
    accountsNames: ['Account 1', 'Account 2'],
  },
};

export const DefaultStory = (args) => (
  <div style={{ position: 'relative', width: 335 }}>
    <EditableLabel {...args} />
  </div>
);

DefaultStory.storyName = 'Default';
