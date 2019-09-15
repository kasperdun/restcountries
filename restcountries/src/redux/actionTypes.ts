import { Country } from "../models/countries";

export enum ActionTypes {
    LOADING_START = 1,
    LOADING_END = 2,
    SEARCH_DONE = 3,
    SELECT_COUNTRY = 4
}

export interface LoadingStartAction {
    type: ActionTypes.LOADING_START;
}

export interface LoadingEndAction {
    type: ActionTypes.LOADING_END;
}

export interface SearchDoneAction {
    type: ActionTypes.SEARCH_DONE;
    data: Country[];
}

export interface SelectCountryAction {
    type: ActionTypes.SELECT_COUNTRY;
    country: Country;
}

export type CountriesActions =
    LoadingStartAction
    | LoadingEndAction
    | SearchDoneAction
    | SelectCountryAction
    ;
