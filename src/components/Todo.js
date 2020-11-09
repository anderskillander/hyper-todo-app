import React from 'react'

function Todo({ todo }) {

    return (
        <div>
            <li>
            {todo.text}
            </li>
        </div>
    )
}

export default Todo
