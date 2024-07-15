import React from 'react'
import './signup.scss'
import { cloudName, logo } from '../cloud/CloudImages'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <div className="logo">
        <Image className='logo' cloudName={cloudName} publicId={logo.logo1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
        </div>
        <div className="heading">
          <h1>SIGNUP</h1>
        </div>
<div className="inputs">
<div className="input">
            <img className='img' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' alt="" />
            <input type="text" placeholder='First Name' />
        </div>
        <div className="input">
            <img className='img' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' alt="" />
            <input type="text" placeholder='Last Name' />
            </div>
            <div className="input">
            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9bfbsrY6ShR5V_d4WR-ZG3kzU9OS-2CYVA&s' alt="" />
            <input type="email" placeholder='Email' />
        </div>
            <div className="input">
            <img className='img' src='https://www.iconpacks.net/icons/1/free-phone-icon-519-thumb.png' alt="" />
            <input type="number" placeholder='Phone' />
        </div>
        <div className="input">
            <img className='img' src='https://w7.pngwing.com/pngs/138/590/png-transparent-computer-icons-password-icon-svg-security-password-icon.png' alt="" />
            <input type="password" placeholder='Password' />
        </div>
        <div className="forgot-password">Already have an account? <Link className='log' to='/LogIn'>Login</Link></div>
</div>
<div className="btn">
  <button className='start'>Submit</button>
  </div>
    </div>
  )
}

export default SignUp