export default function getFormattedMonth({
  date,
  locale,
}: {
  date: Date;
  locale: string;
}): string {
  return `${date.toLocaleString(locale, { month: 'long' })}`;
}
