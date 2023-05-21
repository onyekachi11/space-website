import React from 'react'
import ExploreImg from '../assets/home/explore-home.png'

const Home = () => {
  return (
  <>
  <div className='home-container'>
  <div className='home-text'>
    <p className='home-heading'>SO, YOU WANT TO TRAVEL TO </p>
    <h1>
      SPACE
    </h1>
    <p className='home-text-desc'>
      Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
    </p>
  </div>
  <div className='home-explore-img'>
    <img src={ExploreImg} alt="" />
  </div>
  </div>
  </>
  )
}

export default Home