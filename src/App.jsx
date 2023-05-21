import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import NavRoutes from './Component/NavRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <main className='home-bg dest-bg crew-bg tech-bg'>
  <Header/>
    <NavRoutes/>
  </main>
    </>
  )
}

export default App
