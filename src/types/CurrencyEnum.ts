export enum CurrencyEnum {
  USD = 'USD',
  BTC = 'BTC',
  GBP = 'GBP',
  EUR = 'EUR',
  YEN = 'YEN',
}

export type CurrencyType = keyof typeof CurrencyEnum;
