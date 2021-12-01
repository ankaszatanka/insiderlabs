import * as React from 'react';
import { TransactionBox } from '@molecules';

import { AssetType, SelectedAssetType, TransactionScreenSize, TransactionType } from '@interfaces';

type IBuyTransactionSell = {
  colSize: TransactionScreenSize;
};
export const TransactionBuy: React.FunctionComponent<IBuyTransactionSell> = ({ colSize }) => {
  const [from, setFrom] = React.useState<SelectedAssetType>({ name: AssetType.BNB, value: 0 });
  const [to, setTo] = React.useState<SelectedAssetType>({ name: AssetType.ELON, value: 0 });
  const assets = [AssetType.BNB, AssetType.ETH];

  return <TransactionBox type={TransactionType.buy} colSize={colSize} from={from} to={to} assets={assets} handleSetForm={setFrom} handleSetTo={setTo} />;
};
