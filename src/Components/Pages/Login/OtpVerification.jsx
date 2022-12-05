import React, { useState } from "react";
import "../../../Assets/css/OtpVerification.css";

export default function OtpVerification() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };
  return (
    <div className="loginParentDiv">
      <div className="loginDiv">
        <h4 className="loginHeading">OTP Verification</h4>
        <h4 className="welcomeHeading otpHeadingPaddingTop">
          Welcome to the Admin Panel
        </h4>
        <h4 className="otpMiniHeading">
          Enter 4 Digit code here for confirmation your account
        </h4>
        <div className="inputOTPs otpHeadingPaddingTop">
          <input
            type="number"
            className="otpInputField"
            maxLength="1"
            onInput={maxLengthCheck}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <span className="otpHyphenPadding">-</span>
          <input
            type="number"
            className="otpInputField"
            onChange={(e) => setNumber2(e.target.value)}
            maxLength="1"
            onInput={maxLengthCheck}
          />
          <span className="otpHyphenPadding">-</span>
          <input
            type="number"
            className="otpInputField"
            onChange={(e) => setNumber3(e.target.value)}
            maxLength="1"
            onInput={maxLengthCheck}
          />
          <span className="otpHyphenPadding">-</span>
          <input
            type="number"
            className="otpInputField"
            onChange={(e) => setNumber4(e.target.value)}
            maxLength="1"
            onInput={maxLengthCheck}
          />
        </div>
        <span className="invalid-otp-message"></span>
        <div className="timerOtpDiv">
          <span className="makeFontWeightBold">3:44</span>
          <span className="handleColorPadding">Resend code</span>
        </div>

        <button className="otpSubmitButton">Submit</button>
      </div>
    </div>
  );
}
