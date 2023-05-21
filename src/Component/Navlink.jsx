import React ,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'
import Hamburger from '../assets/shared/icon-hamburger.svg'
import Close from '../assets/shared/icon-close.svg'

const Navlink = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false)

    const openMenu = () =>{
        setIsMenuOpen(true)
       }
     
       const closeMenu = () =>{
        setIsMenuOpen(false)
       }
  return (
    <>
    <nav>
    <div className='header-container' >
        <div className='logo-img'>
            <img src={Logo} alt="" />
        </div>

        <div className={`${isMenuOpen ?'navlinks-container ':'navlinks-container closeMenu'}`}>

            <div className='close' onClick={closeMenu}>
                <img src={Close} alt="" />
            </div>
            
            <div className='navlinks'>
            <NavLink to='/' onClick={closeMenu}>
                <>
                <span>00</span>
                Home
                </>
            </NavLink>
            <NavLink to='/destination' onClick={closeMenu}>
                <>
                <span>01</span>
                Destination
                </>
            </NavLink>
            <NavLink to='/crew' onClick={closeMenu}>
                <>
                <span>02</span>
                Crew
                </>
            </NavLink>
            <NavLink to='/technology' onClick={closeMenu}>
                <>
                <span>03</span>
                Technology
                </>
            </NavLink>
            </div>
        </div>

        <div className='open' onClick={openMenu} >
            <img src={Hamburger} alt="" />
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navlink