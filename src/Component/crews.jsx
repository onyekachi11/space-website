import React, {useState} from 'react'
import CrewDouglas from '../assets/crew/image-douglas-hurley.png'
import CrewAnsari from '../assets/crew/image-anousheh-ansari.png'
import CrewMark from '../assets/crew/image-mark-shuttleworth.png'
import CrewVictor from '../assets/crew/image-victor-glover.png'
import '../Pages/crew.css'

const crews = ({crewImgBig, setCrewImgBig}) => {
    const [crewImg, setCrewImg] = useState(CrewDouglas)
    const [crewText, setCrewText] = useState('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.')
    const [crewName, setCrewName] = useState('Douglas Hurley')
    const [crewRole, setCrewRole] = useState('Commander')

  return (
    <>
    <section>
    <div className='crew-details'>
        
        <div className='flex-text'>
            <div className='sliderdots' >
                <div className='slidedot' onClick={()=>{
                    setCrewImg(CrewDouglas)
                    setCrewImgBig(CrewDouglas)
                    setCrewName('Douglas Hurley')
                    setCrewRole('Commander')
                    setCrewText('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.')
                }}
                ></div>
                <div className='slidedot' onClick={()=>{
                    setCrewImg(CrewMark)
                    setCrewImgBig(CrewMark)
                    setCrewName('MARK SHUTTLEWORTH')
                    setCrewRole('Mission Specialist ')
                    setCrewText('Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.')
                }}
                ></div>
                <div className='slidedot' onClick={()=>{
                    setCrewImg(CrewVictor)
                    setCrewImgBig(CrewVictor)
                    setCrewName('Victor Glover')
                    setCrewRole('PILOT')
                    setCrewText('Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ')
                }}
                ></div>
                <div className='slidedot' onClick={()=>{
                    setCrewImg(CrewAnsari)
                    setCrewImgBig(CrewAnsari)
                    setCrewName('Anousheh Ansari')
                    setCrewRole('Flight Engineer')
                    setCrewText('Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ')
                }}
                ></div>
            </div>
            <div>

            <p className='crew-role'>
                {crewRole}
            </p>
            <h2 className='crew-name'>
                {crewName}
            </h2>
            <p className='crew-text'>
            {crewText}
            </p>
            </div>
        </div>
            <div className='crew-line'></div>
            <div className='crew-img'>
                <img src={crewImg} alt="" />
            </div>

    </div>
    </section>
    </>
  )
}

export default crews