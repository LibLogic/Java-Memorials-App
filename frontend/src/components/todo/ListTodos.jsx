import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    TodoDataService.retrieveAllTodos(
      AuthenticationService.getLoggedInUser()
    ).then((response) => {
      this.setState({
        todos: response.data,
      });
    });
  }

  render() {
    return (
      <div className="listTodos">
        <h1>List Todos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.onDelete(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  onDelete(id) {
    TodoDataService.deleteTodo(
      AuthenticationService.getLoggedInUser(),
      id
    ).then((response) => console.log(response));
  }
}

export default ListTodos;
