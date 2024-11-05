import { create } from '@storybook/theming/create';
import GGLogo from './GGLockup.svg';

export default create({
  base: 'dark',
  brandTitle: 'GG Design System',
  brandUrl: 'https://gg.com',
  brandImage: GGLogo,
  brandTarget: '_self',
});