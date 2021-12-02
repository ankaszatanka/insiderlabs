import { AssetNameView, AssetPair, PriceChangesData, EntityForListItem, Tabs, TableCol } from '@atoms';
import { AssetLinks, RiskInfoView, BooleanInfoView } from '@molecules';
import * as React from 'react';
import { AssetType, RiskTypeLevel } from '@interfaces';

export const AssetTable: React.FunctionComponent = () => {
  const asset: AssetType = AssetType.ELON;
  const tabs = ['Score', 'Scam Box', 'Troll Box'];
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]);
  const paths = {
    etherscan: 'https://etherscan.io/token/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3',
    telegram: 'https://t.me/dogelonmars',
    twitter: 'https://twitter.com/dogelonmars',
    coingecko: 'https://www.coingecko.com/en/coins/dogelon-mars',
    coinmarketcap: 'https://coinmarketcap.com/currencies/dogelon/',
  };
  const assetValue = {
    usd: 1.03439574,
    eth: 0.0004012,
  };
  const priceChangesData = {
    '1H': 0.0234,
    '24H': -0.045,
    '7D': 0.1144,
    '30D': 0.5544,
  };
  const assetValuesCol1 = {
    'market cap': 13456618,
    liquidity: 7820684,
    'pooled-eth': 254.79,
    'all-time-high': 427,
    'total-tx': 123.467,
  };
  const assetValuesCol2 = {
    'circulating-supply': 145684.5,
    'daily-volume': 15684,
    'pooled-eth': 37987.42,
    'al-time-low': 2.72,
    'total-holders': 7307,
  };
  return (
    <div className='w-full md:1/2 md:mr-6 lg:w-3/12'>
      <TableCol col1={<AssetNameView name='dogelon.io' iconSrc={`/assets/images/assetIcons/${asset}.svg`} />} col2={<AssetLinks paths={paths} />} />
      <TableCol
        col1={<AssetPair names={['ELON', 'ETH']} />}
        col2={
          <div>
            <p className='text-main-green  text-right'>${assetValue.usd}</p>
            <p className='text-main-green text-right'>{assetValue.eth} ETH</p>
          </div>
        }
      />
      <PriceChangesData changes={priceChangesData} />
      <TableCol
        col1={
          <>
            {' '}
            {Object.keys(assetValuesCol1).map((key, i) => {
              const val = Object.values(assetValuesCol1)[i];
              return <EntityForListItem key={i} title={key} value={val as number} />;
            })}
          </>
        }
        col2={
          <>
            {' '}
            {Object.keys(assetValuesCol2).map((key, i) => {
              const val = Object.values(assetValuesCol1)[i];
              return <EntityForListItem key={i} title={key} value={val as number} />;
            })}
          </>
        }
      />
      <Tabs tabs={['Score', 'Scam Box', 'Troll Box']} activeTab={activeTab} setActiveTab={(tab: string) => setActiveTab(tab)} />
      <TableCol col1={<RiskInfoView riskLevel={RiskTypeLevel.safe} />} col2={<BooleanInfoView value={true} title='Public Contract' />} />
      <TableCol col1={<BooleanInfoView value={true} title='Mint' />} col2={<BooleanInfoView value={true} title='Sellable' />} />
      <TableCol col1={<BooleanInfoView value={false} title='Tornado Cash' />} col2={<BooleanInfoView value={false} title='Exchange Hot Wallet' />} />
      <TableCol col1={<BooleanInfoView value={false} title='Previous Rugs' />} />
    </div>
  );
};
