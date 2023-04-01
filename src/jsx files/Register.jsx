import React from "react";
import "../css files/Register.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Form from "react-bootstrap/Form";

function Register(props) {
  return (
    <>
      <div className="Container" id="register">
        {/*main section starts here*/}
        <div className="section">
          <img
            src={require("../pics/registerImg.png")}
            alt="BgPic"
            className="BgImg"
          />
          <div className="mainBody">
            <Box className="mainBox">
              <div className="boxHead">
                <h1>Register</h1>
              </div>
              <div className="boxArea">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Full Name"
                    />{" "}
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Mobile No."
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Form.Select className="input inputS">
                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </Form.Select>
                  </Grid>
                  <Grid item xs={6}>
                    <Form.Select className="input inputS">
                      <option>Specialization</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Babysitting">Daycare</option>
                      <option value="Babysitting">Washing</option>
                    </Form.Select>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Permanent Address"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Pin Code"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Form.Select className="input inputS">
                      <option>Salary Expected</option>
                      <option value="0-5">0-5,000</option>
                      <option value="6-10">6,000-10,000</option>
                      <option value="11-15">11,000-15,000</option>
                      <option value="16-20">16,000-20,000</option>
                      <option value="21-25">21,000-25,000</option>
                    </Form.Select>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="form-group file-area">
                      <label for="images">
                        <span>Upload Aadhar Card (both sides)</span>
                        <input
                          type="file"
                          name="images"
                          id="images"
                          required="required"
                          multiple="multiple"
                        />
                      </label>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <Button className="registerBtn">Register Now!</Button>
            </Box>
          </div>
        </div>
        {/*main section ends here*/}
      </div>
    </>
  );
}

export default Register;
