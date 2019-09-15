import { IStore } from "../../redux/store";
import { searchCountries } from "../../redux/countries/actions";
import { Country } from "../../models/countries";
import {
  PageWrapper,
  ContentWrapper,
  Details,
  DetailsTitle,
  NoDataText
} from "./styles";
import React from "react";
import { connect } from "react-redux";
import PageHeader from "../PageHeader/PageHeader";
import InputWithSuggestions from "../InputWithSuggestions/InputWithSuggestions";
import { FormattedMessage, FormattedNumber } from "react-intl";

interface IDispatchToProps {
  searchCountries: Function;
}

const mapStateToProps = (state: IStore) => {
  const { countriesStore } = state;

  return {
    country: countriesStore.selectedCountry
  };
};

const dispatchToProps = {
  searchCountries: searchCountries
};

type CountriesPageProps = ReturnType<typeof mapStateToProps> & IDispatchToProps;

class CountryPage extends React.Component<CountriesPageProps> {
  render() {
    const { country } = this.props;
    let content: JSX.Element;
    if (country) {
      content = (
        <>
          <div>
            <img alt="flag" src={country && country.flag} />
          </div>
          <Details>{this.renderCountryInfo(country)}</Details>
        </>
      );
    } else {
      content = (
        <NoDataText>
          <FormattedMessage id="app.content.noData" />
        </NoDataText>
      );
    }
    return (
      <PageWrapper itemProp={country && country.flag}>
        <PageHeader>
          <InputWithSuggestions></InputWithSuggestions>
        </PageHeader>
        <ContentWrapper>{content}</ContentWrapper>
      </PageWrapper>
    );
  }

  private renderCountryInfo = (country: Country) => {
    return (
      <>
        <div>
          <DetailsTitle>
            <FormattedMessage id="app.content.details.name" />
          </DetailsTitle>
          <span>{country.name}</span>
        </div>
        <div>
          <DetailsTitle>
            <FormattedMessage id="app.content.details.capital" />
          </DetailsTitle>
          <span>{country.capital}</span>
        </div>
        <div>
          <DetailsTitle>
            <FormattedMessage id="app.content.details.population" />
          </DetailsTitle>
          <FormattedNumber value={country.population} />
        </div>
        <div>
          <DetailsTitle>
            <FormattedMessage id="app.content.details.area" />
          </DetailsTitle>
          <FormattedNumber value={country.area} />
        </div>
      </>
    );
  };
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(CountryPage);
