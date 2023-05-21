import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './Destination.css'
import MoonPNG from '../assets/destination/image-moon.png'
import MarsPNG from '../assets/destination/image-mars.png'
import EuropaPNG from '../assets/destination/image-europa.png'
import TitanPNG from '../assets/destination/image-titan.png'


const Destination = () => {
  const [destImage, setDestImg] = useState(MoonPNG)
  const [name, setName] = useState('MOON')
  const [desc, setDesc] = useState('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.')
  const [distance, setDistance] = useState('384,400 KM')
  const [time, setTime] = useState('3 DAYS')
  // const [activeState, setActiveState] = useState()
  // const [active, setActive] = useState(false)
  // const [removeActive, setRemoveActive] = useState(true)

  // const handleSetActive = () => {
  //   setActiveState({border: '1px solid white'})
  // }

  // const removeSetActive = () =>{
  //   setActiveState({border: 'none'})
  // }

  return (
    <>
    <div className='dest-container'>

    <p className='dest-heading'>
      <span>01</span>
       PICK YOUR DESTINATION
    </p>

    <article className='dest-page'>
    <div className='dest-img'>
      <img src={destImage} alt="" />
    </div>

    <div className='dest-text'>
        <div className='dest-links'>
        <NavLink onClick={()=>{
          setDestImg(MoonPNG)
          setName('MOON')
          setDesc('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.')
          setDistance('384,400 KM')
          setTime('3 DAYS')
        }}
        >MOON</NavLink>


        <NavLink onClick={()=>{
          setDestImg(MarsPNG)
          setName('MARS')
          setDesc('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!')
          setDistance('225 MIL. KM')
          setTime('9 MONTHS')
        }} 
        >MARS</NavLink>


        <NavLink onClick={()=>{
          setDestImg(EuropaPNG)
          setName('EUROPA')
          setDesc('The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.')
          setDistance('628 MIL. KM')
          setTime('3 YEARS')
        }} >EUROPA</NavLink>


        <NavLink onClick={()=>{
          setDestImg(TitanPNG)
          setName('TITAN')
          setDesc('The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.')
          setDistance('1.6 BIL. KM')
          setTime('7 YEARS')
        }}>TITAN</NavLink>


        </div>
        <h1>
          {name}
        </h1>
        <p className='description'>
          {desc}
        </p>
        <div className='divider'> 
        </div>
        <div className='distance-time-container'>
          <div >
            <p className='distance-time'>AVG. DISTANCE</p>
            <p className='distance-time-text'>{distance}</p>
          </div>
          <div>
            <p className='distance-time'>Est. Travel Time</p>
            <p className='distance-time-text'>{time}</p>
          </div>
        </div>

    </div>
    </article>
    </div>
    </>
  )
}

export default Destination