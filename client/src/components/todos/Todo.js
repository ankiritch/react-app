import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoCheck() {
    toggleTodo(todo.id)
  }

  return (
    <div>
        <label>
            <input type='checkbox' checked={todo.complete} onChange={handleTodoCheck}/>
            {todo.name}
        </label>
    </div>
  )
}
