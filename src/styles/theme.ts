import { defaultTheme } from '@xstyled/emotion';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#423C66', // midnight-purple,
    'primary-hover': '#645D93',
    'primary-pressed': '#241E47',
    secondary: '#FFF',
    'secondary--hover': '#F7F6FE',
    'secondary--pressed': 'EBE9FB',
    'input-border': '#E9EEF2',
    'input-border--active': '#423C66',
    // multiple font colors which are not specified - I've selected one
    'font-color': '#423C66',
    'midnight-gray': '#4D6475',
    'purple-gray': '#595D7B',
    stroke: '#F4F8FA',
  },
};

export default theme;
