// styles/globalStyles.js
import { createGlobalStyle } from '@xstyled/emotion';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    background: ${theme.colors.stroke}; 
    color: ${theme.colors['font-color']}; 
  }
`;

export default GlobalStyle;
