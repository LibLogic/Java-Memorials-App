import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Header from "../components/views/Header";
import MainView from "../components/views/MainView";
import TopView from "../components/views/TopView";
import BottomView from "../components/views/BottomView";
import LeftSiblingView from "../components/views/LeftSiblingView";
import RightSiblingView from "../components/views/RightSiblingView";
import LeftChildView from "../components/views/LeftChildView";
import RightChildView from "../components/views/RightChildView";
import Search from "../components/views/Search";
import Login from "../components/views/Login";
import Logout from "../components/views/Logout";
import Footer from "../components/views/Footer";
import Error from "../components/views/Error";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: sessionStorage.getItem("authenticateUserName") ? true : false,
    };

    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  render() {
    return (
      <div className="routes">
        <Router>
          <Header loggedInStatus={this.state.loggedIn} />
          <Switch>
            <AuthenticatedRoute path="/" exact component={Login} />
            <AuthenticatedRoute path="/search" exact component={Search} />
            <AuthenticatedRoute path="/view/main" exact component={MainView} />
            <AuthenticatedRoute
              path="/view/parents"
              exact
              component={TopView}
            />
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
      </div>
    );
  }

  setLoggedIn(childData) {
    this.setState({ loggedIn: childData });
  }
}

export default Routes;
