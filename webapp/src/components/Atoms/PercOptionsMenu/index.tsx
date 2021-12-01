import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';

import { CallbackFunctionText } from '@interfaces';
import classnames from 'classnames';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 3,
    marginTop: theme.spacing(1),
    minWidth: 100,
    backgroundColor: '#272730',
    color: '#fff',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export type IInput = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface IAssetNameViewProps extends IInput {
  options: string[];
  activeTab: string;
  setActiveTab: CallbackFunctionText;
}

export const PercOptionsMenu: React.FunctionComponent<IAssetNameViewProps> = ({ options, activeTab, setActiveTab }) => {
  const initialSettingCustomInput = 'Custom';
  const [customInputValue, setCustomInputValue] = React.useState<string>(initialSettingCustomInput);

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (value) {
      if (value > 100) {
        setCustomInputValue('100');
        setActiveTab('100');
      } else if (value < 0) {
        setCustomInputValue('0');
        setActiveTab('0');
      } else {
        setCustomInputValue(value.toString());
        setActiveTab(value.toString());
      }
    }
  };
  const handleClick = (option: string) => {
    setCustomInputValue(initialSettingCustomInput);
    setActiveTab(option);
  };
  const handleOnFocus = () => {
    setCustomInputValue('');
    setActiveTab('');
  };
  const inputClasses = classnames([
    'w-full border text-xs text-gray-5 border-gray-5 flex justify-center items-center mx-1 py-2 bg-transparent focus:outline-none rounded',
    {
      'px-3': customInputValue === initialSettingCustomInput,
      'px-5 text-gray-7 border-gray-7': customInputValue !== initialSettingCustomInput,
    },
  ]);
  return (
    <div className='flex w-full'>
      <style jsx>
        {`
          .currency-icon {
            top: 8.5px;
            right: 8px;
          }
        `}
      </style>
      {options.map((option) => (
        <button className={`w-1/5 py-1 border text-xs ${option === activeTab ? 'text-gray-7 border-gray-7' : 'text-gray-5 border-gray-5'} rounded flex justify-center items-center mx-1`} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
      <div className='relative w-1/5'>
        <input type='text' min={0} max={100} value={customInputValue} className={inputClasses} onChange={handleChange} onFocus={handleOnFocus} />
        <span className={`${customInputValue === initialSettingCustomInput ? 'hidden' : 'text-gray-7 absolute currency-icon text-xs'}`}>%</span>
      </div>
    </div>
  );
};
