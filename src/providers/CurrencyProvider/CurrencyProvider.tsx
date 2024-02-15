import { CurrencyEnum, CurrencyType } from '@/types/CurrencyEnum';
import React, { ReactElement, createContext, useContext } from 'react';

export const defaultCurrency = CurrencyEnum.USD;
export const CurrencyContext = createContext<CurrencyType>(defaultCurrency);

export const CurrencyProvider: React.FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  return (
    <CurrencyContext.Provider value={defaultCurrency}>
      {children}
    </CurrencyContext.Provider>
  );
};

export function useCurrency() {
  const currency = useContext(CurrencyContext);

  if (currency === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }

  return currency;
}
