// import React from "react";

// export default function Dashboard() {
//   return <div>Dashboard</div>;
// }
import React from "react";
import "../../../Assets/css/Dashboard.css";
import MonthlySales from "./Charts/MonthlySales";
import Reports from "./Charts/Report";
import Clients from "./Charts/Clients";
import ReactMap from "./ReactMap.jsx";
// import { LineChart } from "./Charts/LineChart.jsx";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboardParent">
        <h5 className="dashboardHeading">Welcome back, John</h5>
        <span className="dashboardSmallText">Dashboard Overview</span>
        <div className="miniGraphsParent">
          <div className="miniGraph">
            <MonthlySales />
          </div>
          <div className="miniGraph">
            <Reports />{" "}
          </div>
          <div className="miniGraph">
            <Clients />
          </div>
        </div>

        <div className="mainSection">
          <div className="graphCal">
            <div className="graph">Line Chart </div>
            <div className="calender">Calendar</div>
          </div>
          <div className="map">
            <ReactMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
