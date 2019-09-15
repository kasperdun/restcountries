import React from "react";
import { StyledPageHeader, Lang } from "./styles";
import { updateIntl } from "react-intl-redux";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import messages from "../../constants/messages";

interface IDispatchToProps {
  updateIntl: Function;
}
const dispatchToProps = {
  updateIntl: updateIntl
};

type Props = IDispatchToProps;

class PageHeader extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <StyledPageHeader>
        <FormattedMessage id="app.header.appName" />
        {children}
        <div>
          <FormattedMessage id="app.header.lang" />
          <Lang onClick={this._onEnClick}>EN</Lang>
          <Lang onClick={this._onRuClick}>RU</Lang>
        </div>
      </StyledPageHeader>
    );
  }

  private _onRuClick = () => {
    this.props.updateIntl({ locale: "ru", messages: messages["ru"] });
    localStorage.setItem("locale", "ru");
  };

  private _onEnClick = () => {
    this.props.updateIntl({ locale: "en", messages: messages["en"] });
    localStorage.setItem("locale", "en");
  };
}

export default connect(
  null,
  dispatchToProps
)(PageHeader);
