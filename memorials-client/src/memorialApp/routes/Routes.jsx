import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../store";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Header from "../components/Header";
import MainView from "../components/MainView";
import Browse from "../components/Browse";
// import LocData from "../components/LocData";
import FamilyView from "../components/FamilyView";
// import Search from "../components/Search";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Error from "../components/Error";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: sessionStorage.getItem("authenticateUserName") ? true : false,
    };

    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  render(props) {
    return (
      <Router>
        <Header loggedInStatus={this.state.loggedIn} />
        <Switch>
          <AuthenticatedRoute path="/" exact component={Login} />

          {/* <AuthenticatedRoute
            path="/search"
            exact
            render={(props) => <Search {...props} store={store} />}
          /> */}

          <AuthenticatedRoute
            path="/browse"
            exact
            render={(props) => <Browse {...props} store={store} />}
          />

          {/* <AuthenticatedRoute
            path="/locData"
            exact
            render={(props) => <LocData {...props} store={store} />}
          /> */}

          <AuthenticatedRoute
            path="/view/main"
            exact
            render={(props) => <MainView {...props} store={store} />}
          />
          <AuthenticatedRoute
            path="/view/family"
            exact
            component={FamilyView}
          />
          <Route
            path="/login"
            exact
            render={(props) => (
              <Login {...props} setLoggedInStatus={this.setLoggedIn} />
            )}
          />
          <AuthenticatedRoute
            path="/logout"
            exact
            render={(props) => (
              <Logout {...props} setLoggedInStatus={this.setLoggedIn} />
            )}
          />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }

  setLoggedIn(isLoggedIn) {
    this.setState({ loggedIn: isLoggedIn });
  }
}

export default Routes;
