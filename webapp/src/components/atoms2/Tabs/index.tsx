import { ITab } from '@interfaces';
import * as React from 'react';

export const Tabs: React.FunctionComponent<ITab> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className='mb-6'>
      {tabs.map((title: string, i: number) => (
        <button key={i} className={title === activeTab ? 'bg-main-blue text-white rounded p-2 capitalize' : 'text-main-blue p-2 capitalize'} onClick={() => setActiveTab(title)}>
          {title}
        </button>
      ))}
    </div>
  );
};
