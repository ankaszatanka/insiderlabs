import * as React from 'react';
import Image from 'next/image';

export interface IAssetImageViewProps {
  name: string;
}
export const AssetImageView: React.FunctionComponent<IAssetImageViewProps> = ({ name }) => (
  <div className='absolute  bg-gray-2 rounded w-8 h-8 flex items-center justify-center m-1'>
    <Image src={`/assets/images/assetIcons/${name}.svg`} alt={`${name}'s icon`} width={20} height={20} />
  </div>
);
