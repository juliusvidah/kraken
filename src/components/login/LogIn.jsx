import { Image, Transformation } from "cloudinary-react";
import React from "react";
import { cloudName, logo } from "../cloud/CloudImages";
import { Link } from "react-router-dom";
import "./login.scss";

const LogIn = () => {
  return (
    <div>
      <div className="logo">
        <Image className="logo" cloudName={cloudName} publicId={logo.logo1}>
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
      <div className="heading">
        <h1>LOGIN</h1>
      </div>
      <div className="inputs1">
        <div className="input1">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9bfbsrY6ShR5V_d4WR-ZG3kzU9OS-2CYVA&s"
            alt=""
          />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input1">
          <img
            className="img"
            src="https://w7.pngwing.com/pngs/138/590/png-transparent-computer-icons-password-icon-svg-security-password-icon.png"
            alt=""
          />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forgotten Password?{" "}
        <Link className="log" to="/ForgottenPassword">
          Click here
        </Link>
      </div>
      <div className="btns2">
        <button className="start">Submit</button>
      </div>
    </div>
  );
};

export default LogIn;
