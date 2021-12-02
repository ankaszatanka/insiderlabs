import * as React from 'react';
export interface IAssetNameViewProps {
  names: [string, string];
}
export const AssetPair: React.FunctionComponent<IAssetNameViewProps> = ({ names }) => (
  <div className='flex justify-between items-center bg-gray-3 px-4 py-2 rounded w-28'>
    <p className='text-white text-md font-medium'>
      {names[0]}/{names[1]}
    </p>
  </div>
);
