import { Country } from "../../models/countries";

export interface ICountriesStore {
    loading: boolean;
    suggestions: Country[];
    selectedCountry?: Country;
}