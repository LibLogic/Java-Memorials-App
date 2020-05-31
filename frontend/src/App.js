import React, { Component } from "react";
import "./App.css";
// import "./components/counter/Counter.css";
// import Counter from "./components/counter/Counter";
import Header from "./components/todo/Header";
import TodoApp from "./components/todo/TodoApp";
import Footer from "./components/todo/Footer";

function App() {
  // return <div className="App"><Counter /></div>;
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <TodoApp /> */}
      {/* <Footer /> */}
    </div>
  );
}

class Login extends Component {
  render() {
    return (
      <div>
        User Name: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <button>Login</button>
      </div>
    );
  }
}

export default App;
