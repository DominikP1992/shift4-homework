import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { LocaleProvider } from '@/providers/LocaleProvider';
import { CurrencyProvider } from '@/providers/CurrencyProvider';
import theme from '@/styles/theme';
import { ReactElement } from 'react';

function render(ui: ReactElement, renderOptions?: RenderOptions) {
  function Wrapper({ children }: { children: ReactElement }) {
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
