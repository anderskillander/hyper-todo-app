import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

function TodoForm({ todos, setTodos }) {
    const [newTodo, setNewTodo] = useState("")
    
    function changeHandler (e) {
        setNewTodo(e.target.value)
    }
    
    function submitHandler (e) {
        e.preventDefault();
        if(newTodo === "") return
        setTodos([...todos, {id: uuidv4(), text: newTodo}])
        setNewTodo("")
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <input value={newTodo} onChange={changeHandler}/>
            <button type="submit">Add</button>
        </form>
        </div>
    )
}

export default TodoForm
