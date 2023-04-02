import React, { useState } from "react";
import "../css files/Hero.css";
import { Button } from "@mui/material";
import videoBg from "../pics/heroBgVid.mp4";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Login from "./Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  // border: "solid #000",
  boxShadow: 80,
  p: 4,
};

function Hero(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              <Button onClick={handleOpen}>LogIn</Button>
            </li>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={style}
                style={{ textAlign: "center", backgroundColor: "#e4b991", }}
              >
                {/* <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Text in a modal
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography> */}
                <Login />
              </Box>
            </Modal>
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

export default Hero;
