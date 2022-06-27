import React from 'react'
import Navbar from './components/navigation/Navbar';
import TodoPage from './pages/TodoPage';
import NamePage from './pages/NamePage';
import Home from './pages/HomePage';

function App() {

  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/todos':
      component = <TodoPage />
      break
    case '/name':
      component = <NamePage />
      break
    default:
      break
  }


  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch('/api').then(
  //     response => response.json()
  //     ).then(
  //       data => {
  //         setBackendData(data)
  //       }
  //     )
  // }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
          {component}
      </div>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input text='text' ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
    </>

    // <div>
    //   {(typeof backendData.users === 'undefined') ? (
    //     <p>Loading...</p>
    //   ) : (
    //     backendData.users.map((user, i) => (
    //       <p key={i}>{user}
    //       </p>
    //     ))
    //   )} 
    // </div>
  )
}

export default App
