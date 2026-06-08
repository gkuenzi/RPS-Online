import { useState } from 'react'
import Gameplay from './gameplay.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Gameplay/>
  )
}

export default App
