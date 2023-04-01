import React from "react";
import "../css files/Hero.css";
import { Button } from "@mui/material";
import videoBg from "../pics/heroBgVid.mp4";

function hero(props) {
  return (
    <>
      <div className="container">
        <video src={videoBg} autoPlay loop muted />
        {/* <div className="navbar">
          <div className="nav-logo">LOGO</div>
          <div className="nav-contents">
            <div className="con-home">HOME</div>
            <div className="con-services">SERVICES</div>
            <div className="con-aboutUs">ABOUT US</div>
            <div className="con-Register">REGISTER</div>
            <div className="con-contactUs">CONTACT US</div>
          </div>
          <div className="nav-login">LOGIN</div>
        </div> */}
        {/* navbar starts */}
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
              <Button>HOME</Button>
            </div>
            <div className="innerNavBtns">
              <Button>ABOUT US</Button>
            </div>
            <div className="innerNavBtns">
              <Button>SERVICES</Button>
            </div>
            <div className="innerNavBtns">
              <Button>REGISTER</Button>
            </div>
            <div className="innerNavBtns">
              <Button>CONTACT US</Button>
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
              <Button>HIRE</Button>
            </div>
            <div className="btn">
              <Button>REGISTER</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
