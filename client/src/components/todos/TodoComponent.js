import React, { useState, useEffect, useRef} from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function TodoComponent() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
      }, [])
    
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
      }, [todos])
    
      function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    
      }
    
      function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => { return [...prevTodos, { id: uuidv4(), name: name, complete: false }] })
        console.log(name)
        todoNameRef.current.value = null
      }
    
      function handleClearCompleted() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
      }
    

    return (
        <><TodoList todos={todos} toggleTodo={toggleTodo} />
            <input text='text' ref={todoNameRef} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClearCompleted}>Clear Completed</button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </>
    )
}
