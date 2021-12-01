import * as React from 'react';
import { TransactionBox } from '@molecules';

import { AssetType, SelectedAssetType, TransactionType, TransactionScreenSize } from '@interfaces';

type IBuyTransactionSell = {
  colSize: TransactionScreenSize;
};
export const TransactionSell: React.FunctionComponent<IBuyTransactionSell> = ({ colSize }) => {
  const [from, setFrom] = React.useState<SelectedAssetType>({ name: AssetType.ELON, value: 0 });
  const [to, setTo] = React.useState<SelectedAssetType>({ name: AssetType.BNB, value: 0 });
  const assets = [AssetType.ELON, AssetType.ETH];

  return <TransactionBox type={TransactionType.sell} colSize={colSize} from={from} to={to} assets={assets} handleSetForm={setFrom} handleSetTo={setTo} />;
};
