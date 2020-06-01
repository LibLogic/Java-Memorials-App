import React, { Component } from "react";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          isCompleted: false,
          date: new Date(),
        },
        {
          id: 2,
          description: "Become an Expert",
          isCompleted: false,
          date: new Date(),
        },
        {
          id: 3,
          description: "Learn to Dance",
          isCompleted: false,
          date: new Date(),
        },
      ],
    };
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
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.isCompleted.toString()}</td>
                <td>{todo.date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodos;
