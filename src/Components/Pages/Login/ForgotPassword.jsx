import React, { useState } from "react";
import "../../../Assets/css/ForgotPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let testEmail = document.querySelector(".invalidMessageEmail");
    let borderEmail = document.querySelector(".handleEmailBorder");
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      testEmail.innerText = "Please Enter Your Email";
      testEmail.style.display = "block";

      borderEmail.style.border = "1px solid red";
    } else {
      if (re.test(email)) {
        navigate("/otpVerification");
      } else {
        testEmail.innerText = "Email must be in Email Pattern";
        testEmail.style.display = "block";
        borderEmail.style.border = "1px solid red";
      }
    }
  };
  return (
    <div className="loginParentDiv">
      <div className="loginDiv">
        <h4 className="loginHeading">Forgot Password</h4>
        <h4 className="welcomeHeading handleForgotPasswordHeadingPadding">
          Did'nt Remember your password?
        </h4>
        <h4 className="miniForgotHeading">
          Enter your email address and get your code to access your account
        </h4>
        <div className="addReportForm handleLoginPaddingForm handleForgotPaddingFields">
          <span className="addReportLabelHeading">Email Address</span>
          <input
            type="text"
            required
            className="inputAddReport removeForgotInputShadow handleEmailBorder"
            placeholder="Enter Email Address"
            onChange={(e) => {
              let testEmail = document.querySelector(".invalidMessageEmail");
              let borderEmail = document.querySelector(".handleEmailBorder");
              borderEmail.style.border = "1px solid #f2f2f2";

              testEmail.style.display = "none";

              setEmail(e.target.value);
            }}
          />
          <span className="invalidMessageEmail"></span>
        </div>

        <button onClick={handleSubmit} className="forgotSubmitButton">
          Proceed
        </button>
      </div>
    </div>
  );
}
