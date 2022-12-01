import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../Assets/css/Inspector.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import Table from "react-bootstrap/Table";
import Man from "../../../Assets/images/imgMan.jpg";
import Man2 from "../../../Assets/images/Man2.jpg";
import Man3 from "../../../Assets/images/Man3.jpg";
import Man4 from "../../../Assets/images/Man4.jpg";

const Inspectors = () => {
  return (
    <>
      <div className="backgroundColorAll">
        <div className="header">
          <span className="heading">Inspectors</span>
          <div className="filterButton">
            <div class="dropdown">
              <button class="dropbtn">
                Filter <AiFillCaretDown style={{ "paddingLeft": "6px" }} />
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>{" "}
            <button className="button">Add New Inspector</button>
          </div>
        </div>
        <Table
          striped
          bordered={false}
          hover
          style={{ "background": "#f9faff" }}
        >
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
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Inspectors;
