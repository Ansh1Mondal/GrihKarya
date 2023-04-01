import React from "react";
import "../css files/About.css";
import registerbg from "../pics/registerImg.png";

export default function About(props) {
  return (
    <div
      className="abt-container"
      id="about"
      style={{ backgroundImage: `url(${registerbg})` }}
    >
      <div className="abt-nav"></div>
      <div className="bg">
        <div className="heading">
          <h1>About Us</h1>
          <div className="Abt-content">
            Our website provides a platform to house helpers with different job
            opportunities.
            <p>
              It provides an efficient and well regulated way for both i.e.,the
              user and the helper for a seamless experience.
            </p>
            <p> It offers long term house help services.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
