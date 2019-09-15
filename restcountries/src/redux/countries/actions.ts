import { IStore } from '../store';
import { ActionTypes, SearchDoneAction, LoadingEndAction, SelectCountryAction } from "../actionTypes";
import { Country } from "../../models/countries";
import axios from "axios";
import { BASE_URL } from '../../constants/constants';

export function searchCountries(text: string, isFullText: boolean) {
    return async (dispatch: Function, getState: () => IStore) => {
        await dispatch(loadingStart());
        const data: Country[] = await searchCountriesOnServer(text, isFullText);
        await dispatch(searchDone(data, isFullText));
        await dispatch(loadingEnd());

    }
}

export const selectCountry: (country: Country) => SelectCountryAction =
    (country: Country) => ({
        type: ActionTypes.SELECT_COUNTRY,
        country
    });

const loadingStart: () => LoadingEndAction =
    () => ({
        type: ActionTypes.LOADING_END,
    });

const loadingEnd: () => LoadingEndAction =
    () => ({
        type: ActionTypes.LOADING_END,
    });

const searchDone: (data: Country[], isFullText: boolean) => SearchDoneAction =
    (data: Country[], isFullText: boolean) => ({
        type: ActionTypes.SEARCH_DONE,
        data,
        isFullText
    });

async function searchCountriesOnServer(text: string, isFullText: boolean): Promise<Country[]> {
    let url = `${BASE_URL}/rest/v2/name/${text}`;
    if (isFullText) {
        url += "?fullText=true";
    }
    return axios.get(url).then((response: any) => {
        return response.data as Country[];
    }).catch(() => []);
}