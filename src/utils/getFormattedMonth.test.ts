import getFormattedMonth from './getFormattedMonth';

describe('getFormattedMonth function', () => {
  it('returns the correct month name in English', () => {
    const date = new Date('2024-02-17'); // Use a fixed date for testing
    const locale = 'en-US';
    const formattedMonth = getFormattedMonth({ date, locale });
    expect(formattedMonth).toBe('February');
  });

  it('returns the correct month name in French', () => {
    const date = new Date('2024-03-17'); // Another date for testing
    const locale = 'fr-FR';
    const formattedMonth = getFormattedMonth({ date, locale });
    expect(formattedMonth).toBe('mars');
  });
});
