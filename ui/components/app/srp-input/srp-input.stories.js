import React from 'react';
import SrpInput from '.';

export default {
  title: 'Components/App/SrpInput',
  id: 'ui-components-app-srp-input-srp-input',
  component: SrpInput,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  return <SrpInput {...args} />;
};

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';
