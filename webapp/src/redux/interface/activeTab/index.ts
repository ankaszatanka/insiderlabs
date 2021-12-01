import { createSlice } from '@reduxjs/toolkit';
import { TransactionTabsType } from '@interfaces';

interface ITransactionTabsType {
  tab: TransactionTabsType;
}

const initialState: ITransactionTabsType = {
  tab: TransactionTabsType.advanced,
};

const activeTab = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeActiveTab: (state, value) => {
      state.tab = value.payload;
    },
  },
});

export const { changeActiveTab } = activeTab.actions;

export default activeTab.reducer;
