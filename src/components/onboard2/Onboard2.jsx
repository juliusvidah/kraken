import React from "react";
import "./onboard2.scss";
import { onboarding } from "../cloud/CloudImages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Onboard2 = () => {
  return (
    <div className="onboarding">
      <div className="well-text">
        <LazyLoadImage className="onboarding8" src={onboarding.onboarding8} />
        <LazyLoadImage className="onboarding2" src={onboarding.onboarding2} />
      </div>
      <div className="onboarding7">
        <LazyLoadImage className="onboarding7" src={onboarding.onboarding7} />
      </div>
      <div className="onboarding9">
        <LazyLoadImage className="onboarding9" src={onboarding.onboarding9} />
      </div>
      <div className="onboarding10">
        <LazyLoadImage className="onboarding10" src={onboarding.onboarding10} />
      </div>
      <div className="onboarding11">
        <LazyLoadImage className="onboarding11" src={onboarding.onboarding11} />
      </div>
      <div className="next-btn">
        <Link to="/Onboard3">
          {" "}
          <button className="next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Onboard2;
