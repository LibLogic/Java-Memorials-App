import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Header from "./Header";
import Welcome from "./Welcome";
import ListTodos from "./ListTodos";
import Login from "./Login";
import Logout from "./Logout";
import Footer from "./Footer";
import Error from "./Error";

class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <AuthenticatedRoute path="/welcome" exact component={Welcome} />
            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
            <AuthenticatedRoute path="/todos" exact component={ListTodos} />
            <Route path="/login" exact component={Login} />
            <AuthenticatedRoute path="/logout" exact component={Logout} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
