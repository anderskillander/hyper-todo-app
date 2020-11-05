// import './App.css';
import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
