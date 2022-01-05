import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Reducer from './Component/Reducer'
import Form from './Component/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Reducer />
     <Form/>
     
    </div>
  )
}

export default App
