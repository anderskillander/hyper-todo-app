import React from 'react'
import Todo from "./Todo"

function TodoList({ todos }) {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo 
                    todo={todo}
                    key={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
