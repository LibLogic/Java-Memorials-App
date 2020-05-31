import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Route path="/welcome" exact component={Welcome} />
            <Route path="/welcome/:name" component={Welcome} />
            <Route path="/todos" exact component={ListTodos} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
