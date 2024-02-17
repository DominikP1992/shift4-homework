import { CurrencyEnum, CurrencyType } from '@/types/CurrencyEnum';
import React, { ReactNode, createContext, useContext } from 'react';

export const defaultCurrency = CurrencyEnum.USD;
export const CurrencyContext = createContext<CurrencyType | undefined>(
  undefined,
);

export const CurrencyProvider: React.FC<{
  children: ReactNode | ReactNode[];
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
