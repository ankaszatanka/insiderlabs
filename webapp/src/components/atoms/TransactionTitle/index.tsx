import * as React from 'react';
import { SelectedAssetType, TransactionType, TransactionScreenSize } from '@interfaces';

type ITransactionBox = {
  type: TransactionType;
  colSize: TransactionScreenSize;
  assetFrom: SelectedAssetType;
};
export const TransactionTitle: React.FunctionComponent<ITransactionBox> = ({ type, colSize, assetFrom }) => (
  <div className='flex justify-between'>
    {colSize === TransactionScreenSize.small && <p className={type === TransactionType.buy ? 'text-main-green text-sm capitalize' : 'text-main-red text-sm capitalize'}>{type}</p>}
    <div>
      <span className='text-white text-xs mr-1'>{assetFrom.value.toFixed(4)}</span>
      <span className='text-gray-5 capitalize text-xs'>{assetFrom.name}</span>
    </div>
  </div>
);
