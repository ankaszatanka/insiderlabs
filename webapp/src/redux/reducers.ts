import { combineReducers } from 'redux';

import activeTab from '@redux/interface/activeTab';

const rootReducer = combineReducers({ activeTab });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
