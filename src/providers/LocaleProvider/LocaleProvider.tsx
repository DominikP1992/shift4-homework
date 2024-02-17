import React, { ReactElement, createContext, useContext } from 'react';

export const defaultLocale = 'en-US';
export const LocaleContext = createContext<string | undefined>(undefined);

export const LocaleProvider: React.FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  return (
    <LocaleContext.Provider value={defaultLocale}>
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale() {
  const locale = useContext(LocaleContext);

  if (locale === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return locale;
}
