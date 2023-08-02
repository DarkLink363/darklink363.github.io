/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Wprowadzenie',
          'Changelog',
          'Komponenty',
          'Crud',
          ['Wprowadzenie', 'Service', 'Controller', 'ApiController'],
        ],
      },
    },
  },
};

export default preview;
