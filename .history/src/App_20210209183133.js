import './App.css';
import { useEffect, useState } from 'react'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { db } from './firebase_config';

function App() {

  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    getTodos();
  }, [])
  
  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          completed: doc.data().completed
        })
      ));
    })
  }
  
  return (
    <div className="App">
      <h1>Todo's ⚡️</h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList 
      todos={todos}
      />
    </div>
  );
}

export default App;
