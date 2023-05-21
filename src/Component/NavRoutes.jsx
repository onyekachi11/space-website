import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Destination from '../Pages/Destination'
import Crew from '../Pages/Crew'
import Technology from '../Pages/Technology'
// import Moon from '../Pages/DestMoonPage'
// import Mars from '../Pages/DestMarsPage'
// import Europa from '../Pages/DestEuropaPage'
// import Titan from '../Pages/DestTitanPage'

const NavRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='destination' element={<Destination/>}>
        {/* <Route path='moon' element={<Moon/>}/>
        <Route path='mars' element={<Mars/>}/>
        <Route path='europa' element={<Europa/>}/>
        <Route path='Titan' element={<Titan/>}/> */}
      </Route>
      <Route path='crew' element={<Crew/>}/>
      <Route path='technology' element={<Technology/>}/>
    </Routes>
    </>
  )
}

export default NavRoutes