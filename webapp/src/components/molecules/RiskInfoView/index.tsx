import * as React from 'react';
import { EntityForListItem } from '@atoms';
import { RiskTypeLevel } from '@interfaces';

export interface IRiskInfoViewProps {
  riskLevel: RiskTypeLevel;
}

export const RiskInfoView: React.FunctionComponent<IRiskInfoViewProps> = ({ riskLevel }) => {
  const riskImg = {
    safe: (
      <svg width='10' height='12' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 11V1C10 0.447715 9.55228 0 9 0C8.44772 0 8 0.447715 8 1V11C8 11.5523 8.44772 12 9 12C9.55228 12 10 11.5523 10 11Z' fill='#0BC189' />
        <path d='M6 11V5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11Z' fill='#0BC189' />
        <path d='M2 11V8C2 7.44772 1.55228 7 1 7C0.447715 7 0 7.44772 0 8V11C0 11.5523 0.447715 12 1 12C1.55228 12 2 11.5523 2 11Z' fill='#0BC189' />
      </svg>
    ),
    medium: (
      <svg width='10' height='12' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 11V1C10 0.447715 9.55228 0 9 0C8.44772 0 8 0.447715 8 1V11C8 11.5523 8.44772 12 9 12C9.55228 12 10 11.5523 10 11Z' fill='#E38936' />
        <path d='M6 11V5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11Z' fill='#E38936' />
        <path d='M2 11V8C2 7.44772 1.55228 7 1 7C0.447715 7 0 7.44772 0 8V11C0 11.5523 0.447715 12 1 12C1.55228 12 2 11.5523 2 11Z' fill='#E38936' />
      </svg>
    ),
    hight: (
      <svg width='10' height='12' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 11V1C10 0.447715 9.55228 0 9 0C8.44772 0 8 0.447715 8 1V11C8 11.5523 8.44772 12 9 12C9.55228 12 10 11.5523 10 11Z' fill='#E38936' />
        <path d='M6 11V5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11Z' fill='#E38936' />
        <path d='M2 11V8C2 7.44772 1.55228 7 1 7C0.447715 7 0 7.44772 0 8V11C0 11.5523 0.447715 12 1 12C1.55228 12 2 11.5523 2 11Z' fill='#E38936' />
      </svg>
    ),
  };
  return (
    <EntityForListItem title='Danger / Risk level'>
      <div className='flex items-center'>
        {riskImg[riskLevel]}
        <span className='capitalize text-white text-sm ml-1'>{riskLevel}</span>{' '}
      </div>
    </EntityForListItem>
  );
};
