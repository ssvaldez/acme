import React from "react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";
import { theme } from "theme";
import styled from "styled-components";
import SignIn from "sign-in";
import ResetPassword from "reset-password";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <AppWrapper>
      <Router history={history}>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/reset-password" component={ResetPassword} />
              </Switch>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </Router>
    </AppWrapper>
  );
}

export default App;
