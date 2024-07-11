import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='bg-green-400 text-blue-700'>Tailwind Test</h1>
  
  <Card username="Jaida"/>
  <br />
  <Card username="Maida"/>
  </>
  )
}

export default App
