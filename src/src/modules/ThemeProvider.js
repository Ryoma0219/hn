import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import defaultTheme from "./MaterialTheme";

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    const { location } = props;
    const theme = this.getThemeByPath(location.pathname);
    this.state = { theme };
  }

  componentDidMount() {
    const { history } = this.props;
    this.unlisten = history.listen((location, action) => {
      const theme = this.getThemeByPath(location.pathname);
      this.setState({
        theme
      });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getThemeByPath(pathname) {
    return defaultTheme;
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default withRouter(ThemeProvider);
