import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyInput from './CurrencyInput';
import { useCurrency } from '@/providers/CurrencyProvider';
import { useLocale } from '@/providers/LocaleProvider/LocaleProvider';
import { CurrencyEnum } from '@/types/CurrencyEnum';

jest.mock('@/providers/CurrencyProvider', () => ({
  useCurrency: jest.fn().mockReturnValue('USD'),
}));

jest.mock('@/providers/LocaleProvider/LocaleProvider', () => ({
  useLocale: jest.fn().mockReturnValue('en-US'),
}));

describe('Input', () => {
  beforeEach(() => {
    (useCurrency as jest.Mock).mockReturnValue('USD');
    (useLocale as jest.Mock).mockReturnValue('en-US');
  });

  it('renders without crashing', () => {
    render(
      <CurrencyInput aria-label="test input" currency="USD" value={10000} />,
    );
    expect(screen.getByLabelText('test input')).toBeInTheDocument();
  });

  it('match snapshot', () => {
    render(<CurrencyInput aria-label="test input" value={10000} />);
    expect(screen.getByLabelText('test input')).toMatchSnapshot();
  });

  it('render formatted currency for default (en-us) locale', () => {
    render(<CurrencyInput aria-label="test input" value={10000.25} />);
    expect(screen.getByLabelText('test input')).toHaveValue('10,000.25');
  });

  it('render formatted currency for fr-FR locale', () => {
    (useLocale as jest.Mock).mockReturnValue('fr-FR');

    render(<CurrencyInput aria-label="test input" value={10000.25} />);
    expect(screen.getByLabelText('test input')).toHaveValue('10 000,25');
  });

  for (const currency of Object.keys(CurrencyEnum)) {
    it(`renders proper currency symbol for ${currency}`, () => {
      (useCurrency as jest.Mock).mockReturnValueOnce(currency);
      render(<CurrencyInput aria-label="test input" value={10000.25} />);
      expect(screen.getByLabelText('test input')).toHaveStyle(
        `background-image: url(/icons/${currency.toLowerCase()}.svg)`,
      );
    });
  }
});
