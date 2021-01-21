import './App.css';
import { useState, useEffect } from 'react'
// import useLocalStorage from "./hooks/useLocalStorage"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';

function App() {

  const [todos, setTodos] = useState([]);
  
  
  useEffect(() => {
    const storageTodos = (JSON.parse(localStorage.getItem('savedTodos')))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todos));
  }, [todos]);
  
  
  function deleteTodo (id) {
   setTodos(todos.filter(t => t.id !== id))
  }
  
  function toggleComplete (id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  return (
    <div className="App">
      <Header />
    <div className="todo-container">
      <h1>Todo's ⚡️</h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList 
      todos={todos} 
      deleteTodo={deleteTodo} 
      toggleComplete={toggleComplete}
      />
    </div>
    <div className="counter-container">
      <Counter />
      </div>
      </div>
  );
}

export default App;
