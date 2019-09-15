import { ICountriesStore } from './store';
import { ActionTypes, CountriesActions } from '../actionTypes';


export const initialState: ICountriesStore = {
    loading: false,
    suggestions: [],
    selectedCountry: undefined
};

export default (state: ICountriesStore = initialState, action: CountriesActions) => {

    switch (action.type) {
        case ActionTypes.SEARCH_DONE: {
            return { ...state, suggestions: action.data }
        }
        case ActionTypes.SELECT_COUNTRY: {
            return { ...state, selectedCountry: action.country, suggestions: [] }
        }

        default:
            return state;
    }
};