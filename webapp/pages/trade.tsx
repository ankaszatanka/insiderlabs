import * as React from 'react';
import { Main } from '@templates';
import { AssetTable, TransactionCol } from '@organisms';
import { DropDownMenu, GraphView, Tabs } from '@atoms';
import { TransactionScreenSize, TransactionTabsType } from '@interfaces';
import { useSelector } from 'react-redux';

import { changeActiveTab } from '@redux/actions';
import { RootState } from '@redux/reducers';
import { useAppDispatch } from '@redux/store';
import { useMediaQuery } from 'react-responsive';

const Trade = (): React.ReactElement => {
  const tabs = [TransactionTabsType.simple, TransactionTabsType.advanced, TransactionTabsType.rambo];
  const [colSize, setColSize] = React.useState<TransactionScreenSize>(TransactionScreenSize.small);
  const dispatch = useAppDispatch();
  const activeTab = useSelector((state: RootState) => state.activeTab.tab);
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  React.useEffect(() => {
    !isDesktop && setColSize(TransactionScreenSize.small);
  }, [isDesktop]);
  return (
    <Main>
      <div className='flex flex-col md:flex-row md:justify-between relative'>
        <AssetTable />
        {colSize === TransactionScreenSize.small ? (
          <>
            <div className='w-full lg:w-48 minW-200px bg-gray-2 p-4 m-2 rounded-lg pt-6 relative'>
              {isDesktop && (
                <button onClick={() => setColSize(TransactionScreenSize.large)} className='absolute top-0 right-0 p-2 cursor-pointer'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M19 8H15V10H18V13H20V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8V8Z' fill='#8B8A9D' />
                    <path d='M10 15H8V19C8 19.2652 8.10536 19.5196 8.29289 19.7071C8.48043 19.8946 8.73478 20 9 20H13V18H10V15Z' fill='#8B8A9D' />
                  </svg>
                </button>
              )}
              <div className='border-gray-3 border-b mb-6'>
                <DropDownMenu options={tabs} activeTab={activeTab} setActiveTab={(tab: string) => dispatch(changeActiveTab(tab))} classes='px-0 pb-3' />
              </div>
              <TransactionCol colSize={colSize} />
            </div>
            {isDesktop && <GraphView />}
          </>
        ) : (
          <div className='flex flex-col-reverse justify-end maxW-830px'>
            <div className='bg-gray-2 p-4 m-2 rounded-lg relative'>
              <button onClick={() => setColSize(TransactionScreenSize.small)} className='absolute top-2 right-2 p-2 cursor-pointer'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M19 8H15V10H18V13H20V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8V8Z' fill='#8B8A9D' />
                  <path d='M10 15H8V19C8 19.2652 8.10536 19.5196 8.29289 19.7071C8.48043 19.8946 8.73478 20 9 20H13V18H10V15Z' fill='#8B8A9D' />
                </svg>
              </button>
              <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={(tab: string) => dispatch(changeActiveTab(tab))} />
              <TransactionCol colSize={colSize} />
            </div>
            <GraphView />
          </div>
        )}
      </div>
      {!isDesktop && <GraphView />}
    </Main>
  );
};

export default Trade;
