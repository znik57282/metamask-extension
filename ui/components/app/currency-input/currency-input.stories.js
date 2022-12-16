import React from 'react';
import CurrencyInput from '.';

export default {
  title: 'Components/App/CurrencyInput',
  id: 'ui-components-app-currency-input-currency-input',
  argTypes: {
    hexValue: {
      control: 'text',
    },
    featureSecondary: {
      control: 'boolean',
    },
    onChange: {
      action: 'onChange',
    },
    onPreferenceToggle: {
      action: 'onPreferenceToggle',
    },
  },
};

export const DefaultStory = (args) => <CurrencyInput {...args} />;

DefaultStory.storyName = 'Default';
