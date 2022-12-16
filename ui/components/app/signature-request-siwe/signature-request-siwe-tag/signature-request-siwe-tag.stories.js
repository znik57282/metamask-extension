import React from 'react';
import SignatureRequestSIWETag from '.';

export default {
  title: 'Components/App/SignatureRequestSIWE/SignatureRequestSIWETag',
  id: 'ui-components-app-signature-request-siwe-signature-request-siwe-tag-signature-request-siwe-tag',
  argTypes: {
    text: { control: 'text' },
  },
};

export const DefaultStory = (args) => <SignatureRequestSIWETag {...args} />;

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  text: 'Unsafe',
};
