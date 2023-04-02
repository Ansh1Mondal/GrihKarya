import React, { useState } from "react";

function LoginWithOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    // Send a request to your backend server to generate and send the OTP
    // You may want to include the user's phone number or email address in the request
    const response = await fetch("/send-otp", {
      method: "POST",
      body: JSON.stringify({ phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsOtpSent(true);
  };

  const handleLogin = async () => {
    // Send a request to your backend server to validate the OTP
    const response = await fetch("/validate-otp", {
      method: "POST",
      body: JSON.stringify({ phoneNumber, otp }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // If the OTP is valid, log the user in and redirect them to the appropriate page
  };

  return (
    <div id="login">
      <h1 style={{ textAlign: "center", margin: 20 }}>Login with OTP</h1>
      {!isOtpSent ? (
        <div>
          <label
            htmlFor="phoneNumber"
            style={{ textAlign: "center", margin: 20, fontSize: 20 }}
          >
            Phone number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            onClick={handleSendOtp}
            style={{ textAlign: "center", margin: 20, marginLeft: 200 }}
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginWithOTP;
