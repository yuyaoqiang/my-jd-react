import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./containers/index";
import Logoin from "./containers/logoin/logoin";
import { AppContainer } from "react-hot-loader";
import "./scss/common.scss";

ReactDOM.render(
  <AppContainer>
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/logoin" component={Logoin} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
