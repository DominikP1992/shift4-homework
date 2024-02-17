import type { AppProps } from 'next/app';
import { ThemeProvider, Preflight } from '@xstyled/emotion';
import Modal from 'react-modal';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import Header from '@/components/molecules/Header';
import Button from '@/components/atoms/Button';
import IconButton from '@/components/atoms/IconButton';
import CloseIcon from '@/components/icons/CloseIcon';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import DepositWidgetLogo from '@/components/icons/DonationWidgetLogo';
import Input from '@/components/atoms/Input';
import DonationWidget from '@/components/organisms/DonationWidget/DonationWidget';
import CurrencyInput from '@/components/molecules/CurrencyInput';
import { LocaleProvider } from '@/providers/LocaleProvider';
import DateSelector from '@/components/molecules/DateSelector';
import Text from '@/components/atoms/Text';
import { CurrencyProvider } from '@/providers/CurrencyProvider';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <CurrencyProvider>
          <Preflight />
          <GlobalStyle />
          <Header />
          <div
            style={{
              background: 'white',
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              flexWrap: 'wrap',
            }}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <IconButton size="small">
              <ChevronLeft />
            </IconButton>
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
            <IconButton size="medium">
              <CloseIcon />
            </IconButton>
            <DepositWidgetLogo />
            <Input placeholder="0,00" />

            <CurrencyInput currency="GBP" />
            <DonationWidget />
            <DateSelector onChange={() => {}} />

            <div style={{ width: '100%', display: 'flex' }}>
              <div>
                Fonts
                <Text as="p" font="Inter" weight="bold">
                  Inter
                </Text>
                <Text as="p" font="Work sans" size="xl">
                  Work sans
                </Text>
                <Text as="p" font="Rubik" size="sm">
                  Rubik
                </Text>
              </div>
              <div>
                <Text as="h1" font="Inter">
                  <strong>test</strong>
                </Text>
              </div>
            </div>
          </div>

          <Component {...pageProps}>test</Component>
        </CurrencyProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
