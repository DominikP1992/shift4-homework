import { render, screen } from '@testing-library/react';
import { CurrencyProvider, defaultCurrency, useCurrency } from '.';

describe('CurrencyProvider and useCurrency hook', () => {
  it('CurrencyProvider provides the default currency', () => {
    const TestComponent = () => {
      const currency = useCurrency();
      return <div>{currency}</div>;
    };

    render(
      <CurrencyProvider>
        <TestComponent />
      </CurrencyProvider>,
    );

    expect(screen.getByText(defaultCurrency)).toBeInTheDocument();
  });

  it('useCurrency throws an error when not used within a CurrencyProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    const TestComponent = () => {
      const currency = useCurrency();
      return <div>{currency}</div>;
    };

    expect(() => render(<TestComponent />)).toThrow(
      'useCurrency must be used within a CurrencyProvider',
    );

    console.error = originalError;
  });
});
