import * as React from 'react';
import { CallbackFunctionNumber } from '@interfaces';

import { ReactNode } from 'react';
import classnames from 'classnames';

export interface IInputProps {
  onChange: CallbackFunctionNumber;
  value: number;
  label: string;
  children: ReactNode;
  classes?: string;
}
export const InputAsset: React.FunctionComponent<IInputProps> = ({ onChange, value, label, children, classes = 'mb-2' }) => {
  const inputClasses = classnames(['col-span-6 sm:col-span-3 mt-2', classes]);
  return (
    <div className={inputClasses}>
      <label htmlFor={label} className='block text-sm text-white mb-1 ml-1'>
        {label}
      </label>
      <div className='relative h-12 p-0.5 flex justify-end'>
        <input type='number' name={label} id={label} value={value} onChange={(e: any) => onChange(e.target.value)} className='text-white bg-gray-1 text-xs focus:border-gray-3 outline-none rounded-md px-3 py-2  h-10 w-full' />
        {children}
      </div>
    </div>
  );
};
