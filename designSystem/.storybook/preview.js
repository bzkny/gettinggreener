/** @type { import('@storybook/html').Preview } */
import '../css/theme.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    designToken: {
      defaultTab: 'Sizes',
      styleInjection:
        '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");'
    },
    options: {
      storySort: {
        order: ['Intro to GG`s Design System', 'Tokens', ['Borders', 'Breakpoints', 'Colors', ['Brand', 'Backgrounds'], 'Grid', 'Sizes', 'Typography'], 'Components']
      }
    }
  },
};

export default preview;
