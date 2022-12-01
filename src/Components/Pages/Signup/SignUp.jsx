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
        <span className="miniHeading">Login to access your account</span>
        <div className="signUpFormDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading">First Name</span>
            <input
              type="text"
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
            <span className="invalidMessageFirstName"></span>
          </div>
          <div className="addReportForm handleSignUpPadding">
            <span className="addReportLabelHeading">Last Name</span>
            <input
              type="text"
              className="inputAddReport removeSignUpShadow handleEmailBorder"
              placeholder="Enter Last Name"
              //   onChange={(e) => {
              //     let testEmail = document.querySelector(".invalidMessageEmail");
              //     let borderEmail = document.querySelector(".handleEmailBorder");
              //     borderEmail.style.border = "1px solid #f2f2f2";

              //     testEmail.style.display = "none";

              //     setEmail(e.target.value);
              //   }}
            />
            <span className="invalidMessageEmail"></span>
          </div>
        </div>
        <div className="signUpFormDiv handleSignUpFieldPadding">
          <div className="addReportForm">
            <span className="addReportLabelHeading">Email Address</span>
            <input
              type="text"
              className="inputAddReport removeSignUpShadow handleEmailBorder"
              placeholder="Enter Email Address"
              //   onChange={(e) => {
              //     let testEmail = document.querySelector(".invalidMessageEmail");
              //     let borderEmail = document.querySelector(".handleEmailBorder");
              //     borderEmail.style.border = "1px solid #f2f2f2";

              //     testEmail.style.display = "none";

              //     setEmail(e.target.value);
              //   }}
            />
            <span className="invalidMessageEmail"></span>
          </div>
          <div className="addReportForm handleSignUpPadding">
            <span className="addReportLabelHeading">Email Address</span>
            <input
              type="text"
              className="inputAddReport removeSignUpShadow handleEmailBorder"
              placeholder="Enter Email Address"
              //   onChange={(e) => {
              //     let testEmail = document.querySelector(".invalidMessageEmail");
              //     let borderEmail = document.querySelector(".handleEmailBorder");
              //     borderEmail.style.border = "1px solid #f2f2f2";

              //     testEmail.style.display = "none";

              //     setEmail(e.target.value);
              //   }}
            />
            <span className="invalidMessageEmail"></span>
          </div>
        </div>
        <div className="signUpFormDiv handleSignUpFieldPadding">
          <div className="addReportForm">
            <span className="addReportLabelHeading">Email Address</span>
            <input
              type="text"
              className="inputAddReport removeInputShadow handleEmailBorder"
              placeholder="Enter Email Address"
              //   onChange={(e) => {
              //     let testEmail = document.querySelector(".invalidMessageEmail");
              //     let borderEmail = document.querySelector(".handleEmailBorder");
              //     borderEmail.style.border = "1px solid #f2f2f2";

              //     testEmail.style.display = "none";

              //     setEmail(e.target.value);
              //   }}
            />
            <span className="invalidMessageEmail"></span>
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
        <button className="signUpSubmitButton">Register</button>
        <div className="moveTowardsSignUp">
          <span>
            Don't have an account?{" "}
            <Link to="/login">
              {" "}
              <span style={{ "color": "#625e8a" }}> Login</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
