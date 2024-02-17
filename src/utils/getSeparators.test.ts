import getSeparators from './getSeparators';

describe('getSeparators function', () => {
  it('correctly identifies separators for the US locale', () => {
    const { decimalSeparator, thousandSeparator } = getSeparators('en-US');
    expect(decimalSeparator).toBe('.');
    expect(thousandSeparator).toBe(',');
  });

  it('correctly identifies separators for the German locale', () => {
    const { decimalSeparator, thousandSeparator } = getSeparators('de-DE');
    expect(decimalSeparator).toBe(',');
    expect(thousandSeparator).toBe('.');
  });
});
