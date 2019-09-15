import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from './middleware';
import rootReducer from './reducers';
import { ICountriesStore } from './countries/store';
import { IntlState } from 'react-intl-redux';
import { initialState as countriesInitialState } from './countries/reducers';
import messages from "../constants/messages"

export interface IStore {
    countriesStore: ICountriesStore;
    intl: IntlState
}

export function configureStore(initialState?: IStore): Store<IStore> {
    const create = createStore;
    const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(create);

    const store = createStoreWithMiddleware(rootReducer, initialState) as Store<IStore>;
    (window as any).store = store;
    return store;
}

const savedLocale = localStorage.getItem("locale");
const intlInitialState = {
    locale: savedLocale || "en",
    messages: messages[savedLocale || "en"]
};

const store = configureStore({
    intl: intlInitialState,
    countriesStore: countriesInitialState
});

export default store;