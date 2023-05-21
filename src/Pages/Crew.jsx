import React , {useState}from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css/pagination";
// import "swiper/css";
import './crew.css'
import Crews from '../Component/crews';
import Bigcrew from '../assets/crew/image-douglas-hurley.png'


const Crew = () => {

  const [crewImgBig, setCrewImgBig] = useState(Bigcrew)
  const [crewText, setCrewText] = useState('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.')
  const [crewName, setCrewName] = useState('Douglas Hurley')
  const [crewRole, setCrewRole] = useState('Commander')

  return (
   <>
   <div className='big-crew-container'>
   <div>
    <p className='crew-heading'>
        <span>02</span>
        meet your crew
    </p>
      < Crews crewImgBig={crewImgBig} setCrewImgBig={setCrewImgBig} />
      </div>
      <div className='bigcrew-img'>
          <img src={crewImgBig} alt="" />
      </div>
      </div>
   </>
  )
}


export default Crew