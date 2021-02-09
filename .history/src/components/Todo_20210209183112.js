import React from 'react'
import {IconButton, Checkbox, ListItem, ListItemText} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close';
import { db } from '../firebase_config';



function Todo({ todo, completed, id }) {

    function deleteTodo() {
        db.collection("todos").doc(id).delete();
      }

      function completeTodo () {
          db.collection("todos").doc(id).update({
              completed: !completed,
            })
      }

    return (
            <ListItem style={{
                listStyle: "none",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                }}>
            <ListItemText
            primary={todo}
            style={{
                textDecoration: completed ? "line-through" : null,
                color: completed ? "#C8C8C8" : null,
            }}/>
            <Checkbox
                style={{
                    opacity: todo.completed ? "0.3" : null,
                }}
                variant=""
                checked={todo.completed}
                onClick={completeTodo}
                ></Checkbox>
            <IconButton 
                    variant="contained"
                    color="secondary"
                    onClick={deleteTodo}
                    >
            <CloseIcon />
            </IconButton>
            </ListItem>
    )
}

export default Todo
