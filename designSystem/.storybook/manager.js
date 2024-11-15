import { addons } from '@storybook/manager-api';
import GGTheme from './GGTheme';

addons.setConfig({
  theme: GGTheme,
  sidebar: {
    showRoots: false
  }
});