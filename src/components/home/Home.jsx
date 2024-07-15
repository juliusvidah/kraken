import React from 'react'
import './home.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { cloudName, home } from '../cloud/CloudImages'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
        <div>
  <div className="logo">
  <Image className='home1' cloudName={cloudName} publicId={home.home1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
  <Image className='home2' cloudName={cloudName} publicId={home.home2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
  <Image className='home3' cloudName={cloudName} publicId={home.home3}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
  <Image className='home4' cloudName={cloudName} publicId={home.home4}>
   <Transformation crop="scale" width="200" angle="0" />
  <Image className='home5' cloudName={cloudName} publicId={home.home5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
 </Image>
  </div>
  <div className="btn">
  <Link to='/signup'><button className='start'>Get Started</button></Link>
  </div>
        </div>
    </div>
  )
}

export default Home