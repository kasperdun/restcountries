import { combineReducers, Reducer } from 'redux';
import { IStore } from './store';
import countriesReducer from './countries/reducers';
import { intlReducer } from 'react-intl-redux';

export type ReducersMapObjectType = { [P in keyof (IStore)]: Reducer<IStore[P]> };

const reducers: ReducersMapObjectType = {
    countriesStore: countriesReducer,
    intl: intlReducer,
};

export default combineReducers(reducers);

