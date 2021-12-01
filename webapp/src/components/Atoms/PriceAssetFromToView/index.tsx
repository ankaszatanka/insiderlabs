import * as React from 'react';
import { AssetType } from '@interfaces';
import { separator } from '@utils';

type IAssetType = {
  name: AssetType;
  price: number;
};
type IPriceAssetFromToView = {
  to: IAssetType;
  from: IAssetType;
};

export const PriceAssetFromToView: React.FunctionComponent<IPriceAssetFromToView> = ({ to, from }) => (
  <div className='mb-4'>
    <p className='text-white text-xs'>
      1 <span className='text-gray-5'>{from.name}</span> = {separator(from.price)}
    </p>
    <p className='text-white text-xs'>
      1 <span className='text-gray-5'>{to.name}</span> = {separator(to.price)} <span className='text-gray-5'>USD</span>
    </p>
  </div>
);
