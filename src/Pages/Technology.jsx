import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import LaunchImg from '../assets/technology/image-launch-vehicle-landscape.jpg'
import LaunchImg2 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import SpaceportImg from '../assets/technology/image-spaceport-landscape.jpg'
import SpaceportImg2 from '../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapsuleImg from '../assets/technology/image-space-capsule-landscape.jpg'
import SpaceCapsuleImg2 from '../assets/technology/image-space-capsule-portrait.jpg'
import '../Pages/Technology.css'

const Technology = () => {
  const [techImg , setTechImg] = useState(LaunchImg)
  const [techImg2 , setTechImg2] = useState(LaunchImg2)
  const [techName, setTechName] = useState('LAUNCH VEHICLE')
  const [techText, setTechText] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
  return (
   <div className='tech-container'>

    <p className='tech-heading'>
      <span>03</span>
      SPACE LAUNCH 101
    </p>

    <article className='tech-section'>
      <div className='tech-img'>
        <img src={techImg} alt="" />
      </div>
      <div className='tech-img2'>
        <img src={techImg2} alt="" />
      </div>

      <div className='tech-text'>
        <div className='tech-links'>

          <Link onClick={()=>{
            setTechImg(LaunchImg)
            setTechImg2(LaunchImg2)
            setTechName('LAUNCH VEHICLE')
            setTechText("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
          }}>1</Link>

          <Link onClick={()=>{
            setTechImg(SpaceportImg)
            setTechImg2(SpaceportImg2)
            setTechName('SPACEPORT')
            setTechText("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
          }}>2</Link>

          <Link onClick={()=>{
            setTechImg(SpaceCapsuleImg)
            setTechImg2(SpaceCapsuleImg2)
            setTechName('SPACE CAPSULE')
            setTechText("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.")
          }}>3</Link>

        </div>
        
        <div>
        <p className='tech-first-text'>
          THE TERMINOLOGY...
        </p>
        <h1>
          {techName}
        </h1>
        <p className='tech-second-text'>
          {techText}
        </p>
        </div>
      </div>
    </article>

   </div>
  )
}

export default Technology