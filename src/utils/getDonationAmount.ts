import getMonthsUntilFutureDate from './getMonthsUntilFutureDate';

export default function getDonationAmount({
  selectedDate,
  monthlyDonationAmount = 0,
}: {
  selectedDate: Date;
  monthlyDonationAmount?: number;
}) {
  const numberOfMonths = getMonthsUntilFutureDate(selectedDate);
  const donationAmountSum = monthlyDonationAmount
    ? numberOfMonths * monthlyDonationAmount
    : 0;

  return donationAmountSum;
}
