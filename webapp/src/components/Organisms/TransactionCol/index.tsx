import * as React from 'react';
import { TransactionBuy, TransactionSell } from '@molecules';
import { TransactionScreenSize } from '@interfaces';

export const TransactionCol: React.FunctionComponent<{ colSize: TransactionScreenSize }> = ({ colSize }) => {
  return (
    <>
      {colSize === TransactionScreenSize.small ? (
        <>
          <div className='border-gray-3 border-b mb-6'>
            <TransactionBuy colSize={colSize} />
          </div>
          <TransactionSell colSize={colSize} />
        </>
      ) : (
        <>
          <div className='flex justify-between p-2'>
            <div className='w-1/2 pr-3'>
              <TransactionBuy colSize={colSize} />
            </div>
            <div className='w-1/2 pl-3'>
              <TransactionSell colSize={colSize} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
