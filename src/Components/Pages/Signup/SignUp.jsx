import React, { useState } from "react";
import "../../../Assets/css/SignUp.css";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inspectionExperience, setInspectionExperience] = useState("1-2 Years");

  const [inspectorsNumber, setInspectorsNumber] = useState("1-2 Inspectors");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let testFirstName = document.querySelector(".invalidMessageFirstName");
    let borderFirstName = document.querySelector(".handleFirstNameBorder");
    let testEmail = document.querySelector(".invalidMessageEmail");
    let borderEmail = document.querySelector(".handleEmailBorder");
    let testLastName = document.querySelector(".invalidMessageLastName");
    let borderLastName = document.querySelector(".handleLastNameBorder");
    let testPhoneNumber = document.querySelector(".invalidMessagePhone");
    let borderPhoneNumber = document.querySelector(".handlePhoneBorder");
    let testPassword = document.querySelector(".invalidMessagePassword");
    let borderPassword = document.querySelector(".handlePasswordBorder");
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!firstName && !password && !email && !phoneNumber && !password) {
      testFirstName.innerText = "Please Enter Your First Name";
      testFirstName.style.display = "block";
      testPassword.innerText = "Please Enter Your Password";
      testPassword.style.display = "block";
      testPhoneNumber.innerText = "Please Enter Your Phone Number";
      testPhoneNumber.style.display = "block";
      testLastName.innerText = "Please Enter Your Last Name";
      testLastName.style.display = "block";
      testEmail.innerText = "Please Enter Your Email";
      testEmail.style.display = "block";
      borderFirstName.style.border = "1px solid red";
      borderLastName.style.border = "1px solid red";
      borderEmail.style.border = "1px solid red";
      borderPhoneNumber.style.border = "1px solid red";
      borderPassword.style.border = "1px solid red";
    } else if (!firstName) {
      testFirstName.innerText = "Please Enter Your First Name";
      testFirstName.style.display = "block";
      borderFirstName.style.border = "1px solid red";
    } else if (!lastName) {
      testLastName.innerText = "Please Enter Your Last Name";
      testLastName.style.display = "block";
      borderLastName.style.border = "1px solid red";
    } else if (!email) {
      testEmail.innerText = "Please Enter Your Email";
      testEmail.style.display = "block";
      borderEmail.style.border = "1px solid red";
    } else if (!phoneNumber) {
      testPhoneNumber.innerText = "Please Enter Your Phone Number";
      testPhoneNumber.style.display = "block";
      borderPhoneNumber.style.border = "1px solid red";
    } else if (!password) {
      testPassword.innerText = "Please Enter Your Password";
      testPassword.style.display = "block";
      borderPassword.style.border = "1px solid red";
    } else {
      if (re.test(email)) {
        if (password.length >= 4) {
          alert("good");
        } else {
          testPassword.innerText = "Password Length Must be Greater than 4";
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
  const handleChange = (event, text) => {
    if (text == "inspectorsNumber") {
      setInspectorsNumber(event.target.value);
    } else if (text == "inspectionExperience") {
      setInspectionExperience(event.target.value);
    }
  };

  return (
    <div className="signUpParentDiv">
      <div className="loginDiv">
        <h4 className="loginHeading">Register</h4>
        <h4 className="welcomeHeading">Welcome to the Admin Panel</h4>
        <span className="miniHeading">Create your account</span>
        <div className="signUpFormDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading handlePasswordPadding">
              First Name
            </span>
            <input
              type="text"
              required
              className="inputAddReport removeSignUpShadow handleFirstNameBorder"
              placeholder="Enter First Name"
              onChange={(e) => {
                let testFirstName = document.querySelector(
                  ".invalidMessageFirstName"
                );
                let borderFirstName = document.querySelector(
                  ".handleFirstNameBorder"
                );
                borderFirstName.style.border = "1px solid #f2f2f2";

                testFirstName.style.display = "none";

                setFirstName(e.target.value);
              }}
            />
            <span className="invalidMessageFirstName errorMessageProperty"></span>
          </div>
          <div className="addReportForm handleSignUpPadding">
            <span className="addReportLabelHeading handlePasswordPadding">
              Last Name
            </span>
            <input
              type="text"
              className="inputAddReport removeSignUpShadow handleLastNameBorder"
              placeholder="Enter Last Name"
              onChange={(e) => {
                let testLastName = document.querySelector(
                  ".invalidMessageLastName"
                );
                let borderLastName = document.querySelector(
                  ".handleLastNameBorder"
                );
                borderLastName.style.border = "1px solid #f2f2f2";

                testLastName.style.display = "none";

                setLastName(e.target.value);
              }}
            />
            <span className="invalidMessageLastName errorMessageProperty"></span>
          </div>
        </div>
        <div className="signUpFormDiv handleSignUpFieldPadding">
          <div className="addReportForm">
            <span className="addReportLabelHeading handlePasswordPadding">
              Email Address
            </span>
            <input
              type="text"
              required
              className="inputAddReport removeSignUpShadow handleEmailBorder"
              placeholder="Enter Email Address"
              onChange={(e) => {
                let testEmail = document.querySelector(".invalidMessageEmail");
                let borderEmail = document.querySelector(".handleEmailBorder");
                borderEmail.style.border = "1px solid #f2f2f2";

                testEmail.style.display = "none";

                setEmail(e.target.value);
              }}
            />
            <span className="invalidMessageEmail errorMessageProperty"></span>
          </div>
          <div className="addReportForm handleSignUpPadding">
            <span className="addReportLabelHeading handlePasswordPadding">
              Phone Number
            </span>
            <input
              type="text"
              className="inputAddReport removeSignUpShadow handlePhoneBorder"
              placeholder="Enter Phone Number"
              onChange={(e) => {
                let testPhone = document.querySelector(".invalidMessagePhone");
                let borderPhone = document.querySelector(".handlePhoneBorder");
                borderPhone.style.border = "1px solid #f2f2f2";

                testPhone.style.display = "none";

                setPhoneNumber(e.target.value);
              }}
            />
            <span className="invalidMessagePhone errorMessageProperty"></span>
          </div>
        </div>
        <div className="signUpFormDiv handleSignUpFieldPadding">
          <div className="addReportForm handleEyeIconPosition">
            <span className="addReportLabelHeading handlePasswordPadding">
              Password
            </span>
            <input
              type="password"
              id="password"
              className="inputAddReport removeInputShadow handlePasswordBorder "
              placeholder="Enter Password"
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
            <span onClick={toggle} className="signUpEyeIcon">
              <i class="bi bi-eye-slash" id="togglePassword"></i>
            </span>
            <span className="invalidMessagePassword errorMessageProperty"></span>
          </div>
        </div>
        <div className="signUpFormDiv handleSignUpFieldPadding">
          <div className="handleFlex">
            <h4 className="addReportLabelHeading breakSignUpDropdownHeading">
              How many inspectors are in your organization?
            </h4>

            <select
              id="budget"
              className="customSelect handleSignUpDropDownWidth"
              value={inspectorsNumber}
              onChange={(e) => {
                handleChange(e, "inspectorsNumber");
              }}
            >
              <option value="Residental" className="option">
                1-2 Inspectors
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
          <div className="handleFlex handleSignUpPadding">
            <h4 className="addReportLabelHeading breakSignUpDropdownHeading">
              How many experience do you have in your expection field?{" "}
            </h4>

            <select
              id="budget"
              className="customSelect handleSignUpDropDownWidth"
              value={inspectionExperience}
              onChange={(e) => {
                handleChange(e, "inspectionExperience");
              }}
            >
              <option value="1-2 Years" className="option">
                1-2 Years
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
        </div>
        <button className="signUpSubmitButton" onClick={handleSubmit}>
          Register
        </button>
        <div className="moveTowardsSignUp">
          <span>
            Don't have an account?{" "}
            <Link to="/login" className="handleLinkStyling">
              {" "}
              <span> Login</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
