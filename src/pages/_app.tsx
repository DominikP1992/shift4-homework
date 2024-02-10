import type { AppProps } from 'next/app';
import { ThemeProvider, Preflight } from '@xstyled/emotion';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <Component {...pageProps}>test</Component>
    </ThemeProvider>
  );
}
