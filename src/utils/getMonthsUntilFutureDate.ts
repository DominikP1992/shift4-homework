export default function getMonthsUntilFutureDate(futureDate: Date) {
  const today = new Date();
  const future = new Date(futureDate);

  let months = (future.getFullYear() - today.getFullYear()) * 12;
  months -= today.getMonth();
  months += future.getMonth();

  if (future.getDate() < today.getDate()) {
    months--;
  }

  return months ? Number(months) + 1 : 1;
}
