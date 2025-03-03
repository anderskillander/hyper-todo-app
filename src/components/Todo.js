import React from 'react'
import {IconButton, Checkbox, ListItem, Typography} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close';



function Todo({ todo, deleteTodo, toggleComplete }) {

    const handleRemoveClick = (id) => () => toggleComplete(id);

    return (
            <ListItem style={{
                listStyle: "none",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                }}>
                <Checkbox
                style={{
                    opacity: todo.completed ? "0.3" : null,
                }}
                variant=""
                checked={todo.completed}
                onClick={handleRemoveClick(todo.id)}></Checkbox>
            <Typography
            variant="body1"
            style={{
                textDecoration: todo.completed ? "line-through" : null,
                color: todo.completed ? "#C8C8C8" : null,
                // marginRight: '50px'
            }}
            >
                {todo.text}
            </Typography>
            <IconButton 
            variant="contained"
            color="secondary"
            onClick={() => deleteTodo(todo.id)}
            >
            <CloseIcon />
            </IconButton>
            </ListItem>
    )
}

export default Todo
