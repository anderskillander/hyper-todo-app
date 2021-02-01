import './App.css';
import { useState } from 'react'
import {v4 as uuidv4} from "uuid"

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([])
  
  function handleChange(e) {
    setNewTodo(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    if (newTodo === '') return
    setTodoList([...todoList, {task: newTodo, id: uuidv4()}])
    setNewTodo("")
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={newTodo} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.task} <button onClick={() => deleteTodo(todo.id)}>DELETE</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
