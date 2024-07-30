import React from "react";
import "./onboard3.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { onboarding } from "../cloud/CloudImages";
import { Link } from "react-router-dom";

const Onboard3 = () => {
  return (
    <div className="onboarding">
      <div className="well-text">
        <LazyLoadImage className="onboarding13" src={onboarding.onboarding13} />
        <LazyLoadImage className="onboarding29" src={onboarding.onboarding2} />
      </div>
      <div className="onboarding12">
        <LazyLoadImage className="onboarding12" src={onboarding.onboarding12} />
      </div>
      <div className="onboarding14">
        <LazyLoadImage className="onboarding14" src={onboarding.onboarding14} />
      </div>
      <div className="next-btn">
        <Link to="/Home">
          {" "}
          <button className="next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Onboard3;
