import React from "react";
import "../../../Assets/css/AgentDetails.css";
import AddIcon from "@mui/icons-material/Add";
import { AiFillCaretDown } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import Table from "react-bootstrap/Table";
import Man from "../../../Assets/images/imgMan.jpg";
import Man2 from "../../../Assets/images/Man2.jpg";
import Man3 from "../../../Assets/images/Man3.jpg";
import Man4 from "../../../Assets/images/Man4.jpg";

export default function AgentDetails() {
  const [buyerAgent, setBuyerAgent] = React.useState("Denmark");
  const [sellerAgent, setSellerAgent] = React.useState("Select");

  const handleChange = (event, text) => {
    if (text == "buyerAgent") {
      setBuyerAgent(event.target.value);
    } else if (text == "sellerAgent") {
      setSellerAgent(event.target.value);
    }
  };
  return (
    <div>
      <div className="parentAgent">
        <div className="handleFlex handleResponsiveMargin">
          <span className="addReportLabelHeading">Buyer Agent</span>

          <select
            className="customSelect"
            value={buyerAgent}
            onChange={(e) => {
              handleChange(e, "buyerAgent");
            }}
          >
            <option value="Denmark" className="option">
              Denmark
            </option>

            <option value="Two" className="option">
              Two
            </option>

            <option value="Three" className="option">
              Three
            </option>
          </select>
        </div>{" "}
        <div className="handleFlex handleAgentMargin handleResponsiveMargin">
          <span className="addReportLabelHeading">Seller Agent</span>

          <select
            className="customSelect"
            value={sellerAgent}
            onChange={(e) => {
              handleChange(e, "sellerAgent");
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
        </div>{" "}
        <div className="handleAgentButton">
          <div className="round" style={{ "width": "46px" }}>
            <span>
              <AddIcon />
            </span>
          </div>{" "}
          <span style={{ "marginLeft": "10px" }}>Add Agent</span>
        </div>
      </div>
      <div style={{ "padding": "0 38px" }}>
        <h4>Agents List</h4>
        <Table striped bordered={false} hover>
          <thead>
            <tr>
              <th className="giveSpace">Image</th>
              <th>Inspectors</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>State</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="giveSpace">
                {" "}
                <img
                  src={Man}
                  className="rounded-circle sd"
                  alt="avatar"
                  width="35"
                  height="35"
                />
              </td>
              <td className="handlePadding"> Mark</td>
              <td className="handlePadding">London</td>
              <td className="handlePadding">@mdo</td>
              <td className="handlePadding">1234</td>
              <td className="handlePadding">Otto</td>
              <td className="manageIcons">
                <BiEdit />
                <RiDeleteBin6Line style={{ "marginLeft": "10px" }} />
              </td>
            </tr>
            <tr>
              <td className="giveSpace">
                {" "}
                <img
                  src={Man2}
                  className="rounded-circle sd"
                  alt="avatar"
                  width="35"
                  height="35"
                />
              </td>
              <td className="handlePadding">Mark</td>
              <td className="handlePadding">London</td>
              <td className="handlePadding">@mdo</td>
              <td className="handlePadding">1234</td>
              <td className="handlePadding">Otto</td>
              <td className="manageIcons">
                <BiEdit />
                <RiDeleteBin6Line style={{ "marginLeft": "10px" }} />
              </td>
            </tr>
            <tr>
              <td className="giveSpace">
                {" "}
                <img
                  src={Man3}
                  className="rounded-circle sd"
                  alt="avatar"
                  width="35"
                  height="35"
                />
              </td>
              <td className="handlePadding">Mark</td>
              <td className="handlePadding">London</td>
              <td className="handlePadding">@mdo</td>
              <td className="handlePadding">1234</td>
              <td className="handlePadding">Otto</td>
              <td className="manageIcons">
                <BiEdit />
                <RiDeleteBin6Line style={{ "marginLeft": "10px" }} />
              </td>
            </tr>
            <tr>
              <td className="giveSpace">
                {" "}
                <img
                  src={Man4}
                  className="rounded-circle sd"
                  alt="avatar"
                  width="35"
                  height="35"
                />
              </td>
              <td className="handlePadding">Mark</td>
              <td className="handlePadding">London</td>
              <td className="handlePadding">@mdo</td>
              <td className="handlePadding">1234</td>
              <td className="handlePadding">Otto</td>
              <td className="manageIcons">
                <BiEdit />
                <RiDeleteBin6Line style={{ "marginLeft": "10px" }} />
              </td>
            </tr>
            <tr>
              <td className="giveSpace">
                {" "}
                <img
                  src={Man}
                  className="rounded-circle sd"
                  alt="avatar"
                  width="35"
                  height="35"
                />
              </td>
              <td className="handlePadding">Mark</td>
              <td className="handlePadding">London</td>
              <td className="handlePadding">@mdo</td>
              <td className="handlePadding">1234</td>
              <td className="handlePadding">Otto</td>
              <td className="manageIcons">
                <BiEdit />
                <RiDeleteBin6Line style={{ "marginLeft": "10px" }} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
