import React from 'react';
import { action } from '@storybook/addon-actions';
import NewAccountCreateForm from './new-account.component';

export default {
  title: 'Pages/CreateAccount/NewAccount',
  id: 'ui-pages-create-account-new-account',
};

export const DefaultStory = () => {
  return <NewAccountCreateForm createAccount={action('Account Created')} />;
};

DefaultStory.storyName = 'Default';
