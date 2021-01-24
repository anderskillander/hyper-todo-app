import React from 'react'
import Todo from "./Todo"

function TodoList({ todos, completed, id }) {

      
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo 
                    todo={todo.todo}
                    key={todo.id}
                    completed={todo.completed}
                    id={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
