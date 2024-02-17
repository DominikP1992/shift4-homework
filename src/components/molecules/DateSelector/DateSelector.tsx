import IconButton from '@/components/atoms/IconButton/IconButton';
import Text from '@/components/atoms/Text';
import ChevronLeft from '@/components/icons/ChevronLeft';
import ChevronRight from '@/components/icons/ChevronRight';
import { useLocale } from '@/providers/LocaleProvider';
import theme from '@/styles/theme';
import getFormattedMonth from '@/utils/getFormattedMonth';
import isAfterCurrentMonth from '@/utils/isAfterCurrentMonth';
import { x } from '@xstyled/emotion';
import { useEffect, useState } from 'react';

export interface DateSelectorSelectorProps {
  onChange?: (date: Date) => void;
}

export default function DateSelector({ onChange }: DateSelectorSelectorProps) {
  const locale = useLocale();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectPrevMonth = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleSelectNextMonth = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  useEffect(() => {
    onChange && onChange(selectedDate);
  }, [onChange, selectedDate]);

  return (
    <x.div
      borderRadius="4px"
      padding="0px 12px"
      h={theme.sizes.xl}
      backgroundColor="transparent"
      color={theme.colors['purple-gray'] as any}
      border={`1px solid ${theme.colors['input-border']}`}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="8px"
    >
      <IconButton
        onClick={handleSelectPrevMonth}
        disabled={!isAfterCurrentMonth(selectedDate)}
      >
        <ChevronLeft />
      </IconButton>
      <x.div display="flex" flexDirection="column" alignItems="center">
        <Text as="span" font="Rubik" weight="semibold">
          {getFormattedMonth({ date: selectedDate, locale })}
        </Text>
        <Text as="span" size="sm">
          {selectedDate.getFullYear()}
        </Text>
      </x.div>
      <IconButton onClick={handleSelectNextMonth}>
        <ChevronRight />
      </IconButton>
    </x.div>
  );
}
