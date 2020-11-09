import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import {TextField, Button} from '@material-ui/core';

function TodoForm({ todos, setTodos }) {
    const [newTodo, setNewTodo] = useState("")
    
    function changeHandler (e) {
        setNewTodo(e.target.value)
    }
    
    function submitHandler (e) {
        e.preventDefault();
        if(newTodo === "") return
        setTodos([...todos, {id: uuidv4(), text: newTodo, completed: false}])
        setNewTodo("")
    }
    return (
        <div>
        <form 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}
        onSubmit={submitHandler}>
            <TextField 
            label="Add new todo..."
            value={newTodo} 
            onChange={changeHandler}></TextField>
            <Button 
            variant="contained"
            color="primary"
            type="submit">Add</Button>
        </form>
        </div>
    )
}

export default TodoForm
