import { defaultTheme } from '@xstyled/emotion';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#423C66',
    'primary-hover': '#635D93',
    'primary-pressed': '#231E47',
    secondary: '#FFF',
    'secondary--hover': '#F7F6FE',
    'secondary--pressed': '#ECE9FC',
    'input-border': '#E9EEF2',
    'input-border--active': '#423C66',
    'font-color': '#423C66',
    'midnight-gray': '#4D6475',
    'purple-gray': '#595D7B',
    'blue-gray': '#1E2A32',
    stroke: '#F4F8FA',
    salmon: '#FFDBCB',
    'icon-button--hover': '#F3F5FE',
    'icon-button--pressed': '#E8EAF2',
    gray: '#EEEEEE',
  },
  sizes: {
    ...defaultTheme.sizes,
    xl: '52px',
  },
  texts: {
    ...defaultTheme.texts,
    xs: {
      fontSize: '12px',
      lineHeight: '17px',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '18px',
    },
    default: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    lg: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    xl: {
      fontSize: '24px',
      lineHeight: '28px',
    },
    '2xl': {
      fontSize: '32px',
      lineHeight: '38px',
    },
  },
};

export default theme;
