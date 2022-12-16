import React from 'react';
import README from './README.mdx';
import Alert from '.';

export default {
  title: 'Components/UI/Alert',
  id: 'ui-components-ui-alert-alert',
  component: Alert,
  parameters: {
    docs: {
      page: README,
    },
  },
  argsTypes: {
    visible: {
      control: 'boolean',
    },
    msg: {
      control: 'text',
    },
  },
};

export const DefaultAlert = (args) => {
  return <Alert {...args} />;
};

DefaultAlert.storyName = 'Default';
DefaultAlert.args = {
  visible: true,
  msg: 'Alert',
};
