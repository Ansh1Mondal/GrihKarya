import React from "react";
import { Button } from "@mui/material";
import "../css files/Service.css";
import registerbg from "../pics/registerImg.png";
import s1 from "../pics/serviceImg1.png";
import s2 from "../pics/serviceImg2.png";
import s3 from "../pics/serviceImg3.png";
import s4 from "../pics/serviceImg4.png";

const cards = () => {
  return (
    <div
      className="card-container"
      id="service"
      style={{ backgroundImage: `url(${registerbg})` }}
    >
      <div className="s-nav"></div>
      <div className="card-head">
        <h1>Services</h1>
      </div>
      <div className="card-cards">
        <div className="card1">
          <div
            className="cardback"
            style={{
              backgroundImage: `url(${s1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* <h1>card1</h1> */}
          </div>
          <Button>Book Now</Button>
        </div>
        <div className="card1">
          <div
            className="cardback"
            style={{
              backgroundImage: `url(${s2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* <h1>card1</h1> */}
          </div>
          <Button>Book Now</Button>
        </div>
        <div className="card1">
          <div
            className="cardback"
            style={{
              backgroundImage: `url(${s3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* <h1>card1</h1> */}
          </div>
          <Button>Book Now</Button>
        </div>
        <div className="card1">
          <div
            className="cardback"
            style={{
              backgroundImage: `url(${s4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* <h1>card1</h1> */}
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default cards;
