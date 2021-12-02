import * as React from 'react';
import { CallbackFunctionNumber } from '@interfaces';

export interface IInputWithTabsProps {
  onChange: CallbackFunctionNumber;
  value: number;
  label: string;
  valueToChange?: number;
  minMax: {
    min: number;
    max: number;
  };
  addon?: string;
}
export const InputWithTabs: React.FunctionComponent<IInputWithTabsProps> = ({ onChange, value, label, valueToChange = 0.5, minMax, addon }) => {
  const handleChange = (val: number) => {
    if (val < minMax.min) {
      onChange(minMax.min);
    } else if (val > minMax.max) {
      onChange(minMax.max);
    } else {
      onChange(val);
    }
  };
  return (
    <div className='bg-gray-1 text-xs rounded-md py-2 px-2 h-12 w-full relative flex mb-3'>
      <style jsx>{`
        .btn-change:disabled {
          background-color: #202026;
          cursor: none;
          color: #575761;
        }
        .btn-change:hover:disabled {
          background-color: #202026;
        }
      `}</style>
      <label htmlFor={label} className='block text-sm m-1 text-gray-5 w-2/5'>
        {label}
      </label>
      <input type='text' name={label} id={label} value={value} onChange={(e: any) => handleChange(parseInt(e.target.value))} className='bg-gray-1 w-1/3 text-center text-base outline-none text-gray-1' />
      <p className='text-white text-base absolute top-3 right-12'>
        {value} {addon && <span className='text-white text-base absolute top-0 right--1'>{addon}</span>}
      </p>

      <div className='flex flex-col absolute top-1 right-1 bottom-1 h-10'>
        <button
          disabled={value >= minMax.max}
          onClick={() => {
            const valueIncrement = value + valueToChange;
            onChange(valueIncrement);
          }}
          className='bg-gray-2 text-gray-600 hover:text-gray-700 hover:bg-gray-3 h-5 w-5 rounded-t-md cursor-pointer outline-none flex justify-center items-center btn-change'
        >
          <span className='m-auto text-xs text-gray-7'>+</span>
        </button>
        <button
          disabled={value <= minMax.min}
          onClick={() => {
            const valueDecrement = value - valueToChange;
            onChange(valueDecrement);
          }}
          className='bg-gray-2 text-gray-600 hover:text-gray-700 hover:bg-gray-3 h-5 w-5 rounded-b-md cursor-pointer outline-none flex justify-center items-center btn-change'
        >
          <span className='m-auto text-xs text-gray-7'>−</span>
        </button>
      </div>
    </div>
  );
};
