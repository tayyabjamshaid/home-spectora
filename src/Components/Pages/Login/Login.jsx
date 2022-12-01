import React, { useState } from "react";
import "../../../Assets/css/Login.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let testEmail = document.querySelector(".invalidMessageEmail");
    let testPassword = document.querySelector(".invalidMessagePassword");
    let borderEmail = document.querySelector(".handleEmailBorder");
    let borderPassword = document.querySelector(".handlePasswordBorder");
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email && !password) {
      testEmail.innerText = "Please Enter Your Email";
      testEmail.style.display = "block";
      testPassword.innerText = "Please Enter Your Password";
      testPassword.style.display = "block";
      borderEmail.style.border = "1px solid red";
      borderPassword.style.border = "1px solid red";
    } else if (!email) {
      testEmail.innerText = "Please Enter Your Email";
      testEmail.style.display = "block";
      borderEmail.style.border = "1px solid red";
    } else if (!password) {
      testPassword.innerText = "Please Enter Your Password";
      testPassword.style.display = "block";
      borderPassword.style.border = "1px solid red";
    } else {
      if (re.test(email)) {
        if (password.length >= 4) {
          alert("good");
        } else {
          testPassword.innerText = "Length Must be Greater than 4";
          testPassword.style.display = "block";
          borderPassword.style.border = "1px solid red";
        }
      } else {
        testEmail.innerText = "Email must be in Email Pattern";
        testEmail.style.display = "block";
        borderEmail.style.border = "1px solid red";
      }
    }
  };
  const toggle = () => {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    console.log(togglePassword);
    // toggle the icon
    togglePassword.classList.toggle("bi-eye");
  };

  return (
    <div className="loginParentDiv">
      <div className="loginDiv">
        <h4 className="loginHeading">Login</h4>
        <h4 className="welcomeHeading">Welcome to the Admin Panel</h4>
        <span className="miniHeading">Login to access your account</span>
        <div className="addReportForm handleLoginPaddingForm handleLoginPaddingFields">
          <span className="addReportLabelHeading">Email Address</span>
          <input
            type="text"
            required
            className="inputAddReport removeShadow handleEmailBorder"
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
        <div className="addReportForm handleLoginPaddingFields handleEyeIconPosition">
          <span className="addReportLabelHeading">Password</span>
          <input
            type="password"
            required
            className="inputAddReport removeShadow handlePasswordBorder"
            placeholder="Enter Password"
            id="password"
            onChange={(e) => {
              let testPassword = document.querySelector(
                ".invalidMessagePassword"
              );
              let borderPassword = document.querySelector(
                ".handlePasswordBorder"
              );
              borderPassword.style.border = "1px solid #f2f2f2";

              testPassword.style.display = "none";
              setPassword(e.target.value);
            }}
          />
          <span className="eyeIcon" onClick={toggle}>
            <i class="bi bi-eye-slash" id="togglePassword"></i>
          </span>

          <span className="invalidMessagePassword"></span>
        </div>
        <div className="switchParent">
          <Form>
            <Form.Check type="switch" id="custom-switch" label="Remember Me" />
          </Form>
          <span>Forgot Password ?</span>
        </div>
        <button onClick={handleSubmit} className="loginSubmitButton">
          Login
        </button>
        <div className="moveTowardsSignUp">
          <span>
            Don't have an account?{" "}
            <Link to="/register">
              {" "}
              <span style={{ "color": "#625e8a" }}> Register</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
