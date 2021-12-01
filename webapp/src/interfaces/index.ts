export enum IButtonSize {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
}

export enum IButtonBgColor {
  gray = 'gray',
  blue = 'blue',
  green = 'green',
  red = 'red',
}

export enum AssetType {
  BNB = 'BNB',
  ELON = 'ELON',
  ETH = 'ETH',
}

export enum LogoSizeType {
  medium = 'medium',
  large = 'large',
}

export enum SocialMediaTypes {
  etherscan = 'etherscan',
  discord = 'discord',
  telegram = 'telegram',
  twitter = 'twitter',
  coingecko = 'coingecko',
  coinmarketcap = 'coinmarketcap',
}
export type PathsTypes<t> = {
  [t in SocialMediaTypes]?: string;
};

export type CallbackFunctionNumber = (args: number) => void;
export type CallbackFunctionText = (args: string) => void;

export type PriceChangeValues = '1H' | '24H' | '7D' | '30D';

export enum RiskTypeLevel {
  safe = 'safe',
  medium = 'medium',
  hight = 'hight',
}

export type SelectedAssetType = { name: AssetType; value: number };

export type ITab = { tabs: string[]; activeTab: string; setActiveTab: CallbackFunctionText };

export enum TransactionType {
  buy = 'buy',
  sell = 'sell',
}

export enum TransactionScreenSize {
  small = 'small',
  large = 'large',
}

export enum TransactionTabsType {
  simple = 'simple',
  advanced = 'advanced',
  rambo = 'rambo',
}
