import React from 'react';
import PrivacySettings from './privacy-settings';

export default {
  title: 'Pages/OnboardingFlow/PrivacySettings',
  id: 'ui-pages-onboarding-flow-privacy-settings-privacy-settings',
};

export const DefaultStory = () => {
  return (
    <div style={{ maxHeight: '2000px' }}>
      <PrivacySettings />
    </div>
  );
};

DefaultStory.storyName = 'Default';
