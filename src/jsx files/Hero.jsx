import React from "react";
import "../css files/Hero.css";
import { Button } from "@mui/material";
import videoBg from "../pics/heroBgVid.mp4";

function hero(props) {
  return (
    <>
      <div className="container" id="hero">
        <video src={videoBg} autoPlay loop muted />
        <div className="navbar text-center">
          <div className="navLogo">
            <img
              src={require("../pics/GK.png")}
              alt="baskEat"
              className="Logo"
            />
          </div>
          <div className="navbtns">
            <div className="innerNavBtns">
              <Button
                onClick={() => {
                  document.getElementById("hero").scrollIntoView();
                }}
              >
                HOME
              </Button>
            </div>
            <div className="innerNavBtns">
              <Button
                onClick={() => {
                  document.getElementById("about").scrollIntoView();
                }}
              >
                ABOUT US
              </Button>
            </div>
            <div className="innerNavBtns">
              <Button
                onClick={() => {
                  document.getElementById("service").scrollIntoView();
                }}
              >
                SERVICES
              </Button>
            </div>
            <div className="innerNavBtns">
              <Button
                onClick={() => {
                  document.getElementById("register").scrollIntoView();
                }}
              >
                REGISTER
              </Button>
            </div>
            <div className="innerNavBtns">
              <Button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView();
                }}
              >
                CONTACT US
              </Button>
            </div>
          </div>
          <div className="navbtns">
            <li>
              <Button>LogIn</Button>
            </li>
          </div>
        </div>
        {/* navbar end */}
        <div className="Body">
          <div className="heading1">
            <h1>GrihKarya</h1>
          </div>
          <div className="heading2">
            <h2>A touch of Perfection</h2>
          </div>
          <div className="heading3">
            <h3>Clean Home . Professional Service . Fair Price</h3>
          </div>
          <div className="Btns">
            <div className="btn">
              <Button
                onClick={() => {
                  document.getElementById("service").scrollIntoView();
                }}
              >
                HIRE
              </Button>
            </div>
            <div className="btn">
              <Button
                onClick={() => {
                  document.getElementById("register").scrollIntoView();
                }}
              >
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
