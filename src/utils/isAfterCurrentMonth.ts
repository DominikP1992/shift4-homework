export default function isAfterCurrentMonth(dateToCheck: Date) {
  const todayDate = new Date();

  return (
    dateToCheck.getFullYear() > todayDate.getFullYear() ||
    (dateToCheck.getFullYear() === todayDate.getFullYear() &&
      dateToCheck.getMonth() > todayDate.getMonth())
  );
}
