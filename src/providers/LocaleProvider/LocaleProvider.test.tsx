import { render, screen } from '@testing-library/react';
import { LocaleProvider, defaultLocale, useLocale } from '.';

describe('LocaleProvider and useLocale hook', () => {
  it('LocaleProvider provides the default currency', () => {
    const TestComponent = () => {
      const currency = useLocale();
      return <div>{currency}</div>;
    };

    render(
      <LocaleProvider>
        <TestComponent />
      </LocaleProvider>,
    );

    expect(screen.getByText(defaultLocale)).toBeInTheDocument();
  });

  it('useLocale throws an error when not used within a LocaleProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    const TestComponent = () => {
      const locale = useLocale();
      return <div>{locale}</div>;
    };

    expect(() => render(<TestComponent />)).toThrow(
      'useLocale must be used within a LocaleProvider',
    );

    console.error = originalError;
  });
});
