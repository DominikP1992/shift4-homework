import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { LocaleProvider } from '@/providers/LocaleProvider';
import { CurrencyProvider } from '@/providers/CurrencyProvider';
import theme from '@/styles/theme';
import { ReactNode } from 'react';

function render(ui: ReactNode, renderOptions?: RenderOptions) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <ThemeProvider theme={theme}>
        <LocaleProvider>
          <CurrencyProvider>{children}</CurrencyProvider>
        </LocaleProvider>
      </ThemeProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
