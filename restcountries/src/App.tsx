import React from "react";
import CountryPage from "./components/CountriesPage/CountriesPage";
import { IntlProvider } from "react-intl-redux";

class App extends React.Component {
  render() {
    return (
      <IntlProvider locale="en">
        <CountryPage />
      </IntlProvider>
    );
  }
}

export default App;
