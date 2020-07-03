import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../store";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Header from "../components/Header";
import MainView from "../components/views/MainView";
import TopView from "../components/views/TopView";
import BottomView from "../components/views/BottomView";
import LeftSiblingView from "../components/views/LeftSiblingView";
import RightSiblingView from "../components/views/RightSiblingView";
import LeftChildView from "../components/views/LeftChildView";
import RightChildView from "../components/views/RightChildView";
import Search from "../components/Search";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Footer from "../components/Footer";
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

          <AuthenticatedRoute
            path="/search"
            exact
            render={(props) => <Search {...props} store={store} />}
          />

          <AuthenticatedRoute path="/view/main" exact component={MainView} />
          <AuthenticatedRoute path="/view/parents" exact component={TopView} />
          <AuthenticatedRoute
            path="/view/children"
            exact
            component={BottomView}
          />
          <AuthenticatedRoute
            path="/view/younger-sibling"
            exact
            component={LeftSiblingView}
          />
          <AuthenticatedRoute
            path="/view/older-sibling"
            exact
            component={RightSiblingView}
          />
          <AuthenticatedRoute
            path="/view/younger-child"
            exact
            component={LeftChildView}
          />
          <AuthenticatedRoute
            path="/view/older-child"
            exact
            component={RightChildView}
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
        <Footer />
      </Router>
    );
  }

  setLoggedIn(isLoggedIn) {
    this.setState({ loggedIn: isLoggedIn });
  }
}

export default Routes;
