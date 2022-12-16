import React from 'react';
import SettingsSearch from './settings-search';

export default {
  title: 'Pages/Settings/SettingsSearch',
  id: 'ui-pages-settings-settings-search-settings-search',
};

export const SettingsSearchComponent = () => {
  return <SettingsSearch onSearch settingsRoutesList />;
};
