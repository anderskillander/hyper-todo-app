import React, { useState } from 'react'
// import {v4 as uuidv4} from "uuid"
import {TextField, Button} from '@material-ui/core';
import { db } from '../firebase_config';
import firebase from "firebase";

function TodoForm({ todos, setTodos }) {
    const [newTodo, setNewTodo] = useState("")
    
    function changeHandler (e) {
        setNewTodo(e.target.value)
    }
    
    function submitHandler (e) {
        e.preventDefault();
            if (newTodo === "") return
        db.collection("todos").add({
            completed: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: newTodo,
        })
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
