import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import classnames from 'classnames';
import { CallbackFunctionText } from '@interfaces';

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
  classes?: string;
}

export const DropDownMenu: React.FunctionComponent<IAssetNameViewProps> = ({ options, activeTab, setActiveTab, classes }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (tab: string | any) => {
    setAnchorEl(null);
    typeof tab === 'string' ? setActiveTab(tab) : setActiveTab(activeTab);
  };

  const btnClasses = classnames(['text-gray-6 text-sm py-2 rounded inline-flex items-center', classes]);
  return (
    <div>
      <button className={btnClasses} onClick={handleClick}>
        <span className='mr-2'>{activeTab}</span>
        <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.5 1L4 4L0.5 1' stroke='#8B8A9D' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </button>

      <StyledMenu
        id='dropdown-menu'
        MenuListProps={{
          'aria-labelledby': 'dropdown-menu',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, i) => {
          return (
            <MenuItem key={i} onClick={() => handleClose(option)} disableRipple>
              {option}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
};
