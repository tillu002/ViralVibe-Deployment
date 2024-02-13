import React, { useState } from "react";
import NumberAnimation from "./NumAnimation";

export function OurWorks() {
  return (
    <div className="works-section" id="work-sec">
      <h1>Our Works</h1>
      <div className="our-works">
        <Works
          backgroundImage={
            "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/treat.webp"
          }
        />
        <Works
          backgroundImage={
            "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Home-thmub-1.jpg"
          }
        />
        <Works
          backgroundImage={
            "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/TWASA-THUMBNAIL-HOMEPAGE.jpg"
          }
        />
        <Works
          backgroundImage={
            "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/UPSILON-THUMBNAIL-HOMEPAGE-1.jpg"
          }
        />
      </div>
      <h1 style={{ fontSize: "62px" }} className="happy-heading">
        <NumberAnimation></NumberAnimation>
      </h1>
    </div>
  );
}

const Works = ({ backgroundImage, name, designation }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#00588f",
  };

  return (
    <div className="work-card workCardStyle" style={cardStyle}>
      <div className="work-card-info">
        <h2 className="work-card-name">{name}</h2>
        <p className="work-card-designation">{designation}</p>
      </div>
    </div>
  );
};
