export default class ToDoService {
  static findAll() {
    return fetch('http://localhost:8081/todos')
  }
}
