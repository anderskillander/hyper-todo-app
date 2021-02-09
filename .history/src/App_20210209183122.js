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
  
  // useEffect(() => {
  //   const storageTodos = (JSON.parse(localStorage.getItem('savedTodos')))
  //   if (storageTodos) {
  //     setTodos(storageTodos)
  //   }
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem('savedTodos', JSON.stringify(todos));
  // }, [todos]);
  
  
  // function deleteTodo (id) {
  //  setTodos(todos.filter(t => t.id !== id))
  // }
  
  // function toggleComplete (id) {
  //   setTodos(todos.map(todo => {
  //     if(todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed
  //       }
  //     }
  //     return todo
  //   }))
  // }


  
  return (
    <div className="App">
      <h1>Todo's ⚡️</h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList 
      todos={todos}
      // toggleComplete={toggleComplete}
      // completed={todos.completed}
      />
    </div>
  );
}

export default App;
