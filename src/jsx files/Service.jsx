import React from "react";
import { Button } from "@mui/material";
import "../css files/Service.css";
import registerbg from "../pics/registerImg.png";

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
            style={{ backgroundImage: `url(${registerbg})` }}
          >
            <h1>card1</h1>
          </div>
          <Button>Open</Button>
        </div>
        <div className="card1">
          <div
            className="cardback"
            style={{ backgroundImage: `url(${registerbg})` }}
          >
            <h1>card1</h1>
          </div>
          <Button>Open</Button>
        </div>
        <div className="card1">
          <div
            className="cardback"
            style={{ backgroundImage: `url(${registerbg})` }}
          >
            <h1>card1</h1>
          </div>
          <Button>Open</Button>
        </div>
        <div className="card1">
          <div
            className="cardback"
            style={{ backgroundImage: `url(${registerbg})` }}
          >
            <h1>card1</h1>
          </div>
          <Button>Open</Button>
        </div>
      </div>
    </div>
  );
};

export default cards;
