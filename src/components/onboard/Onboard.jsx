import React from "react";
import "./onboard.scss";
import { onboarding } from "../cloud/CloudImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Onboard = () => {
  return (
    <div className="onboarding">
      <div className="well-text">
        <LazyLoadImage className="onboarding1" src={onboarding.onboarding1} />
        <LazyLoadImage className="onboarding2" src={onboarding.onboarding2} />
      </div>
      <div className="onboarding3">
        <LazyLoadImage className="onboarding3" src={onboarding.onboarding3} />
      </div>
      <div className="onboarding4">
        <LazyLoadImage className="onboarding4" src={onboarding.onboarding4} />
      </div>
      <div className="onboarding5">
        <LazyLoadImage className="onboarding5" src={onboarding.onboarding5} />
      </div>
      <div className="onboarding6">
        <LazyLoadImage className="onboarding6" src={onboarding.onboarding6} />
      </div>
      <div className="next-btn">
        <Link to="/Onboard2">
          {" "}
          <button className="next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Onboard;
