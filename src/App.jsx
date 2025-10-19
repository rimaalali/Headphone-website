import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import TechSpace from './pages/TechSpace/TechSpace'
import Compare from './pages/compare/Compare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Home/>

    </>
  )
}

export default App
