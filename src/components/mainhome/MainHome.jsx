import React from "react";
import "./mainhome.scss";
import Nav from "../nav/Nav";
import { arrow, cloudName, footer, onboard2 } from "../cloud/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import CarouselComponent from "../carousel/CarouselComponent";

const MainHome = () => {
  return (
    <div>
      <Nav />
      <div className="onboard">
        <div className="text">
          <h1>Discover your dream property </h1>
          <h1> in the heart of the city</h1>
        </div>
        <div className="para">
          <p>Team Kraken is a reliable real estate team </p>
          <p> put together by CareerEx initiative.</p>
        </div>
        <div className="btn">
          <button className="start">Invest Now</button>
        </div>
      </div>
      <div className="onboard2"></div>
      <div className="caro">
        <CarouselComponent />
        <div className="p1">
          <h2>Exceptional Locations</h2>
          <p>
            Propwise offers an unparalleled client experience, ensuring both
            satisfaction and security.
          </p>
          <p>This translates into a stress-free investment experience, </p>
          <p>
            allowing you to focus on the joy of building your wealth and
            enjoying your home.
          </p>
        </div>
        <div className="explore">
          Explore Now{" "}
          <Image
            className="arrow"
            cloudName={cloudName}
            publicId={arrow.arrow1}
          >
            <Transformation crop="scale" width="200" angle="0" />
          </Image>{" "}
        </div>
      </div>
      <div className="footer">
        <Image
          className="footer"
          cloudName={cloudName}
          publicId={footer.footer1}
        >
          <Transformation crop="scale" width="200" angle="0" />
        </Image>
      </div>
    </div>
  );
};

export default MainHome;
