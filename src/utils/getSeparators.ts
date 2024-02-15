interface Separators {
  decimalSeparator: string;
  thousandSeparator: string;
}

export default function getSeparators(locale: string): Separators {
  const formattedNumber = new Intl.NumberFormat(locale).format(1000.1);

  const decimalSeparator = formattedNumber.charAt(
    formattedNumber.lastIndexOf('1') - 1,
  );

  let thousandSeparator = formattedNumber.charAt(
    formattedNumber.indexOf('1') + 1,
  );

  if (!thousandSeparator || thousandSeparator === '1') {
    thousandSeparator = '';
  }

  return { decimalSeparator, thousandSeparator };
}
