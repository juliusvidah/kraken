import React from "react";
import { cloudName, logo } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";
import './forgottenpassword.scss'

const ForgottenPassword = () => {
  return (
    <div>
      <div className="logo">
        <Image className="logo" cloudName={cloudName} publicId={logo.logo1}>
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
      <div className="heading">
        <h1>Forgotten Password</h1>
      </div>
      <div className="inputs1">
        <div className="input1">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9bfbsrY6ShR5V_d4WR-ZG3kzU9OS-2CYVA&s"
            alt=""
          />
          <input type="email" placeholder="Enter Your Email" />
        </div>
      </div>
      <Link className="log" to="/ResetPassword">
        <div className="btn77">
          <button className="start77">Proceed</button>
        </div>
      </Link>
    </div>
  );
};

export default ForgottenPassword;
