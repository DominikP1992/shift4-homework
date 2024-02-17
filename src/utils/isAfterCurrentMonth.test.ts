import isAfterCurrentMonth from './isAfterCurrentMonth';

describe('isAfterCurrentMonth function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-06-15'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns false for a date in the same month and year', () => {
    const dateToCheck = new Date('2024-06-20');
    expect(isAfterCurrentMonth(dateToCheck)).toBe(false);
  });

  it('returns true for a date in a future month of the same year', () => {
    const dateToCheck = new Date('2024-07-01');
    expect(isAfterCurrentMonth(dateToCheck)).toBe(true);
  });

  it('returns true for a date in the next year', () => {
    const dateToCheck = new Date('2025-01-01');
    expect(isAfterCurrentMonth(dateToCheck)).toBe(true);
  });

  it('returns false for a date in the previous month of the same year', () => {
    const dateToCheck = new Date('2024-05-31');
    expect(isAfterCurrentMonth(dateToCheck)).toBe(false);
  });

  it('returns false for a date in the previous year', () => {
    const dateToCheck = new Date('2023-12-31');
    expect(isAfterCurrentMonth(dateToCheck)).toBe(false);
  });
});
