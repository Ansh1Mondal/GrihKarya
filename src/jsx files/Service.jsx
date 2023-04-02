import React, { useState } from "react";
import { Button } from "@mui/material";
import "../css files/Service.css";
import registerbg from "../pics/registerImg.png";
import s1 from "../pics/serviceImg1.png";
import s2 from "../pics/serviceImg2.png";
import s3 from "../pics/serviceImg3.png";
import s4 from "../pics/serviceImg4.png";
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

const Cards = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <div>
            <Button onClick={handleOpen}>Book Now</Button>
            {/* <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={style}
                style={{ textAlign: "center", backgroundColor: "#e4b991" }}
              >
                <Login />
              </Box>
            </Modal> */}
          </div>
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
          <div>
            <Button onClick={handleOpen}>Book Now</Button>
            {/* <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={style}
                style={{ textAlign: "center", backgroundColor: "#e4b991" }}
              >
                <Login />
              </Box>
            </Modal>  */}
          </div>
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
          <div>
            <Button onClick={handleOpen}>Book Now</Button>
            {/* <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={style}
                style={{ textAlign: "center", backgroundColor: "#e4b991" }}
              >
                <Login />
              </Box>
            </Modal>  */}
          </div>
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
          <div>
            <Button onClick={handleOpen}>Book Now</Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={style}
                style={{ textAlign: "center", backgroundColor: "#e4b991" }}
              >
                <Login />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
