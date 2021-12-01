import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { AssetType, TransactionScreenSize } from '@interfaces';
import classNames from 'classnames';
import classnames from 'classnames';
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 3,
    marginTop: theme.spacing(1),
    minWidth: 30,
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

type IDropDownSelectAsset = {
  handleChangeAsset: any;
  selectedAsset: AssetType;
  assets: AssetType[];
  colSize: TransactionScreenSize;
};
export const DropDownSelectAsset: React.FunctionComponent<IDropDownSelectAsset> = ({ handleChangeAsset, selectedAsset, assets, colSize }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (asset: string | null) => {
    setAnchorEl(null);
    asset && handleChangeAsset(asset);
  };
  const classBtn = classNames(['absolute top-0.5 right-0.5 bg-gray-2 rounded h-8 flex items-center justify-center m-1', { 'w-20 px-2': colSize === TransactionScreenSize.large }, { 'w-8': colSize === TransactionScreenSize.small }]);
  return (
    <>
      <button className={classBtn} onClick={handleClick}>
        <Image src={`/assets/images/assetIcons/${selectedAsset}.svg`} alt={`${selectedAsset}'s icon`} width={20} height={20} />
        {colSize === TransactionScreenSize.large && (
          <>
            <span className='text-white m-1 mr-2 text-xs'>{selectedAsset}</span>
            <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.5 1L4 4L0.5 1' stroke='#8B8A9D' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </>
        )}
      </button>
      <StyledMenu
        id='select-asset-menu'
        MenuListProps={{
          'aria-labelledby': 'select-asset-menu',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
      >
        {assets.map((asset: string, i) => {
          return (
            <MenuItem key={i} onClick={() => handleClose(asset)} disableRipple>
              <Image src={`/assets/images/assetIcons/${asset}.svg`} alt={`${asset}'s icon`} width={20} height={20} />
              {colSize === TransactionScreenSize.large && <span className='text-white m-1 ml-2 text-xs'>{selectedAsset}</span>}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
};
