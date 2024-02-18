import { ThemeProvider, Preflight, x } from '@xstyled/emotion';
import Modal from 'react-modal';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import Header from '@/components/molecules/Header';
import { LocaleProvider } from '@/providers/LocaleProvider';
import { CurrencyProvider } from '@/providers/CurrencyProvider';
import DonationWidget from '@/components/organisms/DonationWidget';
import { AppProps } from 'next/app';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <CurrencyProvider>
          <Preflight />
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <x.div
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="calc(100vh - 80px)"
          >
            <DonationWidget />
          </x.div>
        </CurrencyProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
