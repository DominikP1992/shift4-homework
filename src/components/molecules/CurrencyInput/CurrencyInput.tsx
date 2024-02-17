import Input from '@/components/atoms/Input';
import { defaultCurrency, useCurrency } from '@/providers/CurrencyProvider';
import { useLocale } from '@/providers/LocaleProvider/LocaleProvider';
import { CurrencyType } from '@/types/CurrencyEnum';
import getSeparators from '@/utils/getSeparators';
import styled from '@xstyled/emotion';
import { useMemo } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

export interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  currency?: CurrencyType;
  fullWidth?: boolean;
}

const InputWithIcon = styled(Input)`
  padding-left: 40px;
  background-image: ${({ currency = defaultCurrency }: CurrencyInputProps) =>
    `url('/icons/${currency.toLowerCase()}.svg')`};
  background-repeat: no-repeat;
  background-position: 10px 50%;
  background-size: 24px;
`;

export default function CurrencyInput({
  currency,
  ...props
}: NumericFormatProps<CurrencyInputProps>) {
  const globalCurrency = useCurrency();
  const locale = useLocale();
  const separators = useMemo(() => {
    return getSeparators(locale);
  }, [locale]);

  return (
    <NumericFormat
      customInput={InputWithIcon}
      thousandSeparator={separators.thousandSeparator}
      decimalSeparator={separators.decimalSeparator}
      currency={currency || globalCurrency}
      allowNegative={false}
      {...props}
    />
  );
}
