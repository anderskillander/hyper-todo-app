import React from 'react'
import Todo from "./Todo"

function TodoList({ todos, deleteTodo, toggleComplete }) {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo 
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
