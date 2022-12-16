import React from 'react';

import AdvancedGasControls from '.';

export default {
  title: 'Components/App/AdvancedGasControls',
  id: 'ui-components-app-advanced-gas-controls-advanced-gas-controls',
};

export const DefaultStory = () => {
  return (
    <div style={{ width: '600px' }}>
      <AdvancedGasControls />
    </div>
  );
};

DefaultStory.storyName = 'Default';
