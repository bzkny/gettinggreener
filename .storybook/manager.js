import { addons } from '@storybook/manager-api';
import hillsTheme from './HillsTheme';

addons.setConfig({
  theme: hillsTheme,
  sidebar: {
    showRoots: false
  }
});