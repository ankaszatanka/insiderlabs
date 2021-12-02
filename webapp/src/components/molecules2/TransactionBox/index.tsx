import * as React from 'react';
import { DropDownSelectAsset, InputAsset } from '@molecules';
import { DropDownMenu, PriceAssetFromToView, ILButton, AssetImageView, PercOptionsMenu, TransactionTitle, InputWithTabs } from '@atoms';
import { IButtonSize, IButtonBgColor, AssetType, SelectedAssetType, TransactionType, TransactionScreenSize, TransactionTabsType } from '@interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';

type ITransactionBox = {
  type: TransactionType;
  colSize: TransactionScreenSize;
  from: SelectedAssetType;
  to: SelectedAssetType;
  assets: AssetType[];
  handleSetForm: (values: SelectedAssetType) => void;
  handleSetTo: (values: SelectedAssetType) => void;
};
export const TransactionBox: React.FunctionComponent<ITransactionBox> = ({ type, colSize, assets, to, from, handleSetForm, handleSetTo }) => {
  const percTabs = ['25%', '50%', '75%', '100%'];
  const [activePercTab, setActivePercTab] = React.useState<string>(percTabs[0]);
  const [slippage, setSlippage] = React.useState<number>(100);
  const [gas, setGas] = React.useState<number>(53);

  const activeTradeTab = useSelector((state: RootState) => state.activeTab.tab);

  const fromAssetPrice = 32353098.32;
  const toAssetPrice = 351.21;

  return (
    <div className='mb-16'>
      <TransactionTitle type={type} colSize={colSize} assetFrom={{ value: fromAssetPrice, name: from.name }} />
      <InputAsset label='From' value={from.value} onChange={(value: number) => handleSetForm({ ...from, value })}>
        <DropDownSelectAsset colSize={colSize} assets={assets} selectedAsset={from.name} handleChangeAsset={(name: AssetType) => handleSetForm({ ...from, name })} />
      </InputAsset>
      {colSize === TransactionScreenSize.small ? (
        <div className='border border-gray-3 rounded-md mx-0.5'>
          <DropDownMenu options={percTabs} activeTab={activePercTab} setActiveTab={(tab: string) => setActivePercTab(tab)} classes='justify-between w-full px-4 ' />
        </div>
      ) : (
        <PercOptionsMenu options={percTabs} activeTab={activePercTab} setActiveTab={(tab: string) => setActivePercTab(tab)} />
      )}
      <InputAsset label='To' value={to.value} onChange={(value: number) => handleSetTo({ ...to, value })} classes='mb-6'>
        <AssetImageView name={to.name} />
      </InputAsset>
      <PriceAssetFromToView to={{ name: to.name, price: toAssetPrice }} from={{ name: from.name, price: fromAssetPrice }} />
      {activeTradeTab === TransactionTabsType.advanced && (
        <div className={`${colSize === TransactionScreenSize.small ? 'flex flex-col' : 'flex'}`}>
          {colSize === TransactionScreenSize.small ? (
            <>
              <InputWithTabs value={slippage} onChange={(value) => setSlippage(value)} label='Slippage' minMax={{ min: 0, max: 100 }} addon='%' />
              <InputWithTabs value={gas} onChange={(value) => setGas(value)} label='Gas' minMax={{ min: 0, max: 55 }} valueToChange={1} />
            </>
          ) : (
            <>
              <div className='mb-2 mr-1'>
                <InputWithTabs value={slippage} onChange={(value) => setSlippage(value)} label='Slippage' minMax={{ min: 0, max: 100 }} addon='%' />
              </div>
              <div className='mb-2 ml-1'>
                <InputWithTabs value={gas} onChange={(value) => setGas(value)} label='Gas' minMax={{ min: 0, max: 55 }} valueToChange={1} />{' '}
              </div>
            </>
          )}
        </div>
      )}
      <ILButton handleClick={() => console.log('click')} size={IButtonSize.S} bgColor={type === TransactionType.buy ? IButtonBgColor.green : IButtonBgColor.red} classes='w-full'>
        <span className='text-white capitalize'>
          {type} {to.name}
        </span>
      </ILButton>
    </div>
  );
};
