import axios from "axios";
import { API_URL_ROOT } from "../../components/todo/Constants";

class TodoDataService {
  retrieveAllTodos(name) {
    return axios.get(`${API_URL_ROOT}/users/${name}/todos`);
  }

  retrieveTodo(name, id) {
    return axios.get(`${API_URL_ROOT}/users/${name}/todos/${id}`);
  }

  addTodo(name, id, todo) {
    return axios.put(`${API_URL_ROOT}/users/${name}/todos/${id}`, todo);
  }

  deleteTodo(name, id) {
    return axios.delete(`${API_URL_ROOT}/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    return axios.put(`${API_URL_ROOT}/users/${name}/todos/${id}`, todo);
  }
}

export default new TodoDataService();
