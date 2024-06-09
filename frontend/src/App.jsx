import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: "Monday",
          description: "Gym with BB",
          completed: false
        },
        {
          title: "Monday",
          description: "Gym with BB",
          completed: false
        }
      ]}></Todos>
    </>
  )
}

export default App
