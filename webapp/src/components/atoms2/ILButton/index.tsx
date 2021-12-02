import * as React from 'react';
import classnames from 'classnames';
import { IButtonSize, IButtonBgColor } from '@interfaces';

export interface ILButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: IButtonSize;
  title?: string;
  bgColor?: IButtonBgColor;
  classes?: string;
}
export const ILButton: React.FunctionComponent<ILButtonProps> = ({ handleClick, size = IButtonSize.L, title, bgColor = IButtonBgColor.gray, children, classes }) => {
  const btnClasses = classnames([
    'flex items-center justify-center btn rounded px-4',
    classes,
    `btn--${size} btn-bg-${bgColor}`,
    {
      'bg-gray-3': bgColor === 'gray',
      'bg-main-red': bgColor === 'red',
      'bg-main-blue': bgColor === 'blue',
      'bg-main-green': bgColor === 'green',
    },
  ]);
  return (
    <button onClick={handleClick} className={btnClasses}>
      <style jsx>{`
        .btn--XL {
          height: 48px;
        }
        .btn--L {
          height: 44px;
        }
        .btn--M {
          height: 44px;
        }
        .btn--S {
          height: 32px;
        }
      `}</style>
      {children}
      {title && <span className='text-white ml-2 whitespace-nowrap text-sm xl:inline hidden'>{title}</span>}
    </button>
  );
};
