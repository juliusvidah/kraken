import React from 'react'
import './mainhome.scss'
import Nav from '../nav/Nav'

const MainHome = () => {
  return (
    <div>
       <Nav/> 
       <div className="onboard">
       <div className="text">
       <h1>Discover your dream property </h1>
        <h1> in the heart of the city</h1>
       </div>
       <div className="para">
       <p>Team Kraken is a reliable real estate team </p>
       <p>  put together by CareerEx initiative.</p>
       </div>
       <div className="btn">
  <button className='start'>Invest Now</button>
  </div>
       </div>
       
    </div>
  )
}

export default MainHome