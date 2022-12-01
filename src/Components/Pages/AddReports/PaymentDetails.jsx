import React from "react";
import "../../../Assets/css/PaymentDetails.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function PaymentDetails() {
  const [paymentMode, setPaymentMode] = React.useState("Offline Payment");
  const [service, setService] = React.useState("Select");

  const handleChange = (event, text) => {
    if (text == "paymentMode") {
      setPaymentMode(event.target.value);
    } else if (text == "service") {
      setService(event.target.value);
    }
  };
  return (
    <div className="handlePaymentAllPadding">
      <div className="paymentParentDiv">
        <div className="handleFlex">
          <span className="addReportLabelHeading">Payment Mode</span>

          <select
            id="budget"
            className="customSelect"
            value={paymentMode}
            onChange={(e) => {
              handleChange(e, "paymentMode");
            }}
          >
            <option value="Offline Payment" className="option">
              Offline Payment
            </option>

            <option value="Two" className="option">
              Two
            </option>

            <option value="Three" className="option">
              Three
            </option>
          </select>
        </div>
        <div className="addReportForm">
          <span className="addReportLabelHeading">Duration</span>
          <input
            type="text"
            className="inputAddReport handleInputPropertyPadding"
            placeholder="Enter Duration"
          />
        </div>
        <div className="addReportForm">
          <span className="addReportLabelHeading">Price</span>
          <input
            type="text"
            className="inputAddReport handleInputPropertyPadding"
            placeholder="$"
          />
        </div>
        <div className="handleFlex">
          <span className="addReportLabelHeading">Select Service</span>

          <select
            id="budget"
            className="customSelect"
            value={service}
            onChange={(e) => {
              handleChange(e, "service");
            }}
          >
            <option value="Select" className="option">
              Select
            </option>

            <option value="Two" className="option">
              Two
            </option>

            <option value="Three" className="option">
              Three
            </option>
          </select>
        </div>
        <div className="addReportForm">
          <span className="addReportLabelHeading">Tax</span>
          <input
            type="text"
            className="inputAddReport handleInputPropertyPadding"
            placeholder="Enter Tax"
          />
        </div>
        <div className="addReportForm">
          <span className="addReportLabelHeading">Total Amount</span>
          <input
            type="text"
            className="inputAddReport handleInputPropertyPadding"
            placeholder="$ 0.00"
          />
        </div>
      </div>
      <h4 className="paymentHeading">Agreement / Contract</h4>
      <div className="contractDiv">
        <div className="contractDivPart1">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Home Inspector Agreement{" "}
              <span className="contractIcon handleContractIconPaddingLeft">
                <VisibilityIcon />
              </span>
            </label>
          </div>
        </div>
        <div className="contractDivPart1 handleContractPaddingLeft">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              InterNACHI Home Inspector Agreement{" "}
              <span className="contractIcon handleContractIconPaddingLeft">
                <VisibilityIcon />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
