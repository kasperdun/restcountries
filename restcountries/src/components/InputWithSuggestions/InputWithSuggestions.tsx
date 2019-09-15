import { IStore } from "../../redux/store";
import { searchCountries, selectCountry } from "../../redux/countries/actions";
import { Country } from "../../models/countries";
import { Suggestions, Suggestion, StyledInput } from "./styles";
import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

interface State {
  value: string;
}

interface IDispatchToProps {
  searchCountries: Function;
  selectCountry: Function;
}

const mapStateToProps = (state: IStore) => {
  const { countriesStore } = state;

  return {
    data: countriesStore.suggestions
  };
};

const dispatchToProps: IDispatchToProps = {
  searchCountries: searchCountries,
  selectCountry: selectCountry
};

type CountriesPageProps = ReturnType<typeof mapStateToProps> & IDispatchToProps;

class CountryPage extends React.Component<CountriesPageProps, State> {
  private _timer!: number;

  constructor(props: CountriesPageProps) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <FormattedMessage id="app.search.label" />
        <StyledInput
          onChange={this._onValueChange}
          value={this.state.value}
        ></StyledInput>
        {this._renderSuggestions(data)}
      </div>
    );
  }

  private _onValueChange = (event: any) => {
    this.setState({ value: event.target.value }, this._startSearchTimer);
  };

  private _startSearchTimer = () => {
    if (this._timer) {
      clearTimeout(this._timer);
    }

    this._timer = setTimeout(() => {
      this.props.searchCountries(this.state.value, false);
    }, 300);
  };

  private _renderSuggestions = (suggestions: Country[]) => {
    if (!suggestions.length) {
      return null;
    }

    return (
      <Suggestions>
        {suggestions.map(suggestion => (
          <Suggestion
            key={suggestion.name}
            onClick={() => this._onSuggestionClick(suggestion)}
          >
            {suggestion.name}
          </Suggestion>
        ))}
      </Suggestions>
    );
  };

  private _onSuggestionClick = (suggestion: Country) => {
    this.setState({ value: suggestion.name });
    this.props.selectCountry(suggestion);
  };
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(CountryPage);
