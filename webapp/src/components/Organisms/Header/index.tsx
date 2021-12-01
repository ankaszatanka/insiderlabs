import { IButtonBgColor, IButtonSize } from '@interfaces';
import { GasInfo, Search, ILButton } from '../../atoms';
import { LogoWithAlphaTab } from '../../molecules';

export const Header = () => (
  <header className='flex items-center justify-between flex-wrap lg:flex-nowrap h-22 lg:h-8 w-full mb-10'>
    <div className='flex justify-start items-center w-3/5 order-1'>
      <ILButton handleClick={() => console.log('click')} size={IButtonSize.M}>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M15 7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z' fill='white' />
          <path d='M15 1H1C0.4 1 0 1.4 0 2C0 2.6 0.4 3 1 3H15C15.6 3 16 2.6 16 2C16 1.4 15.6 1 15 1Z' fill='white' />
          <path d='M15 13H1C0.4 13 0 13.4 0 14C0 14.6 0.4 15 1 15H15C15.6 15 16 14.6 16 14C16 13.4 15.6 13 15 13Z' fill='white' />
        </svg>
      </ILButton>
      <LogoWithAlphaTab />
      <GasInfo />
    </div>
    <Search />
    <div className='w-2/5 flex justify-end flex-shrink order-3'>
      <ILButton title='FILTER' handleClick={() => console.log('click')} classes='mx-2'>
        <svg width='17' height='10' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.5 10H1.5C0.948 10 0.5 9.552 0.5 9C0.5 8.448 0.948 8 1.5 8H7.5C8.052 8 8.5 8.448 8.5 9C8.5 9.552 8.052 10 7.5 10Z' fill='#575761' />
          <path d='M11.5 6H1.5C0.948 6 0.5 5.552 0.5 5C0.5 4.448 0.948 4 1.5 4H11.5C12.052 4 12.5 4.448 12.5 5C12.5 5.552 12.052 6 11.5 6Z' fill='#575761' />
          <path d='M15.5 2H1.5C0.948 2 0.5 1.552 0.5 1C0.5 0.448 0.948 0 1.5 0H15.5C16.052 0 16.5 0.448 16.5 1C16.5 1.552 16.052 2 15.5 2Z' fill='#575761' />
        </svg>
      </ILButton>
      <ILButton title='CONNECT WALLET' handleClick={() => console.log('click')} bgColor={IButtonBgColor.blue} classes='w-42'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M21 12V8C21 6.34315 19.6569 5 18 5H3C1.895 5 1 4.105 1 3V20C1 21.657 2.343 23 4 23H18C19.6569 23 21 21.6569 21 20V16' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='square' />
          <path d='M17 2V2C17 1.44772 16.5523 1 16 1H3C1.895 1 1 1.895 1 3C1 4.105 1.895 5 3 5' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='square' />
          <path d='M23 14C23 15.1046 22.1046 16 21 16H18C16.895 16 16 15.105 16 14C16 12.895 16.895 12 18 12H21C22.1046 12 23 12.8954 23 14V14Z' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='square' />
        </svg>
      </ILButton>
    </div>
  </header>
);
