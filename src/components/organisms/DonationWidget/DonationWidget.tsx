import Button from '@/components/atoms/Button';
import IconButton from '@/components/atoms/IconButton';
import Text from '@/components/atoms/Text';
import CloseIcon from '@/components/icons/CloseIcon';
import DonationWidgetLogo from '@/components/icons/DonationWidgetLogo';
import CurrencyInput from '@/components/molecules/CurrencyInput';
import DateSelector from '@/components/molecules/DateSelector';
import styled, { up, useBreakpoint, x, css } from '@xstyled/emotion';
import { Fragment, useMemo, useState } from 'react';
import { useLocale } from '@/providers/LocaleProvider';
import { NumberFormatValues } from 'react-number-format';
import { useCurrency } from '@/providers/CurrencyProvider';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import getDonationAmount from '@/utils/getDonationAmount';
import theme from '@/styles/theme';

// ModalWrapper abstracts ReactModal to enhance extensibility and StyledModal
// applies custom CSS-in-JS styles for responsive and complex styling directly
// within React, ensuring seamless integration and flexibility without losing ReactModal's functionality.

const ModalWrapper = (props: ReactModalProps) => {
  return <ReactModal {...props} />;
};

const StyledModal = styled(ModalWrapper)`
  height: 100%;
  width: 100%;
  border-radius: 0;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  box-shadow: 0px 16px 32px 0px #1e2a3214;
  &::-webkit-scrollbar {
    display: none;
  }

  ${up(
    'sm',
    css`
      border-radius: 5px;
      height: auto;
      width: 600px;
      max-width: 100%;
      max-height: 100%;
    `,
  )}
`;

export default function DonationWidget() {
  const locale = useLocale();
  const breakpoint = useBreakpoint();
  const currency = useCurrency();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [monthlyDonationAmount, setMonthlyDonationAmount] = useState<
    number | undefined
  >(10);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function showDonationWidget() {
    setIsWidgetOpen(true);
  }

  function onWidgetClose() {
    setIsWidgetOpen(false);
  }

  function handleInputChange(value: NumberFormatValues) {
    setMonthlyDonationAmount(value.floatValue);
  }

  function handleDateInputChange(date: Date) {
    setSelectedDate(date);
  }

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency,
        style: 'currency',
      }),
    [locale, currency],
  );

  const numberFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [locale],
  );

  const donationEndDate = useMemo(() => {
    return selectedDate.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
    });
  }, [selectedDate, locale]);

  return (
    <Fragment>
      <Button onClick={showDonationWidget}>💵 Donate 💵</Button>
      <StyledModal
        isOpen={isWidgetOpen}
        shouldCloseOnEsc={true}
        onRequestClose={onWidgetClose}
      >
        <x.div
          backgroundColor={theme.colors.salmon}
          position="relative"
          padding={{ _: '32px 24px 28px 24px', sm: '32px 40px 24px 40px' }}
          display="flex"
          flexDirection={{ _: 'column', sm: 'row' }}
          alignItems="center"
          gap={{ _: '16px', sm: '20px' }}
        >
          <DonationWidgetLogo />
          <x.div
            display="flex"
            justifyContent="center"
            alignItems={{ _: 'center', sm: 'start' }}
            flexDirection="column"
          >
            <Text
              as="h2"
              size={breakpoint === 'xs' ? 'xl' : '2xl'}
              weight="bold"
            >
              The giving block
            </Text>
            <Text as="h3" font="Inter">
              Set up your donation goal!
            </Text>
          </x.div>
          <x.div position="absolute" right="14px" top="8px">
            <IconButton size="medium" onClick={onWidgetClose}>
              <CloseIcon />
            </IconButton>
          </x.div>
        </x.div>
        <x.div
          w="100%"
          padding={{ _: '32px 24px 16px 28px', sm: '32px 40px 40px 40px' }}
          backgroundColor={theme.colors.white}
          position="relative"
        >
          <x.div
            display="flex"
            flexDirection={{ _: 'column', sm: 'row' }}
            gap={{ _: '16px', sm: '24px' }}
          >
            <x.div
              display="flex"
              flexDirection="column"
              gap={'6px'}
              w={{ _: '100%', sm: '50%' }}
            >
              <Text as={'span'} size="sm">
                I can donate
              </Text>
              <CurrencyInput
                fullWidth
                value={monthlyDonationAmount}
                placeholder={numberFormatter.format(0)}
                onValueChange={handleInputChange}
              />
            </x.div>
            <x.div
              display="flex"
              flexDirection="column"
              gap={'6px'}
              w={{ _: '100%', sm: '50%' }}
            >
              <Text as={'span'} size="sm">
                Every month until
              </Text>
              <DateSelector onChange={handleDateInputChange} />
            </x.div>
          </x.div>

          <x.div
            marginTop={{ _: '40px', sm: '32px' }}
            border={{ _: `1px solid ${theme.colors.stroke}`, sm: 'none' }}
            borderRadius="5px"
          >
            <x.div
              display="flex"
              padding={{ _: '24px 16px 24px 16px', sm: '0 16px 24px 16px' }}
              justifyContent="space-between"
            >
              <Text as="p" size={breakpoint === 'xs' ? 'default' : 'lg'}>
                Total amount
              </Text>
              <Text
                as="p"
                size={breakpoint === 'xs' ? 'default' : 'lg'}
                weight="bold"
                data-testid="total-amount"
              >
                {currencyFormatter.format(
                  getDonationAmount({ selectedDate, monthlyDonationAmount }),
                )}
              </Text>
            </x.div>
            <x.div
              backgroundColor={theme.colors.stroke}
              padding="24px 16px"
              borderRadius="5px"
              textAlign={{ _: 'center', sm: 'start' }}
            >
              <Text as="p" size="xs" data-testid="each-month-donation">
                You will be sending{' '}
                <strong>
                  {currencyFormatter.format(Number(monthlyDonationAmount) || 0)}
                </strong>{' '}
                every month, until <strong>{donationEndDate}</strong>. Thank
                you!
              </Text>
            </x.div>
          </x.div>

          <x.div
            display="flex"
            gap={{ _: '16px', sm: '24px' }}
            flexDirection={{ _: 'column', sm: 'row' }}
            marginTop="40px"
          >
            <Button fullWidth variant="secondary" onClick={onWidgetClose}>
              Cancel
            </Button>
            <Button fullWidth onClick={onWidgetClose}>
              Continue
            </Button>
          </x.div>
        </x.div>
      </StyledModal>
    </Fragment>
  );
}
