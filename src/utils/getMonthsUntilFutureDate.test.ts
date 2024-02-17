import getMonthsUntilFutureDate from './getMonthsUntilFutureDate';

describe('getMonthsUntilFutureDate', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('calculates the correct number of months for a future date within the same year', () => {
    jest.setSystemTime(new Date('2024-01-15'));

    const futureDate = new Date('2024-06-15');
    const monthsUntil = getMonthsUntilFutureDate(futureDate);

    expect(monthsUntil).toBe(6);
  });

  it('calculates correctly when the future date is in the next year', () => {
    jest.setSystemTime(new Date('2024-12-15'));

    const futureDate = new Date('2025-01-15');
    const monthsUntil = getMonthsUntilFutureDate(futureDate);

    expect(monthsUntil).toBe(2);
  });

  it("accounts for when the future date's day is earlier in the month than today's", () => {
    jest.setSystemTime(new Date('2024-01-30'));

    const futureDate = new Date('2024-02-15');
    const monthsUntil = getMonthsUntilFutureDate(futureDate);

    expect(monthsUntil).toBe(1);
  });

  it('returns 1 if the future date is in the same month but past today', () => {
    jest.setSystemTime(new Date('2024-01-15'));

    const futureDate = new Date('2024-01-20');
    const monthsUntil = getMonthsUntilFutureDate(futureDate);

    expect(monthsUntil).toBe(1);
  });

  it('returns 1 if the future date is today', () => {
    const today = new Date('2024-01-15');
    jest.setSystemTime(today);

    const futureDate = new Date('2024-01-15');
    const monthsUntil = getMonthsUntilFutureDate(futureDate);

    expect(monthsUntil).toBe(1);
  });
});
