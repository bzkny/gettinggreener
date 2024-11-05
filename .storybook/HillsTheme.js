import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Hill`s Theme',
  brandImage: 'https://www.hillspet.com/content/dam/cp-sites-aem/hillspet-brand/mlp-assets/home-page/hills-logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#0054A4',
  colorSecondary: '#2A73B8',
 
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',
 
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});