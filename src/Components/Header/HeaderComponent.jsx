import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { useStyles } from "./HeaderStyles";
import AddReport from "../Pages/AddReports/AddReport";
import Templates from "../Pages/Templates/Templates";
import TemplateCenter from "../Pages/Templates/TemplateCenter";
import ScratchTemplate from "../Pages/Templates/ScratchTemplate";
import Report from "../Pages/TotalReports/Reports";
import Inspectors from "../Pages/Inspectors/Inspectors";
import Setting from "../Pages/Settings/Setting";
import StaffMangement from "../Pages/Staff/StaffMangement";
import AddNewStaff from "../Pages/Staff/AddNewStaff";
import CompanyProfile from "../Pages/Settings/CompanyProfile";
import UserProfile from "../Pages/Settings/UserProfile";
import CreateAgreement from "../Pages/Settings/CreateAgreement";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";

export default function HeaderComponent() {
  const classes = useStyles();
  const location = useLocation();

  console.log("hash", location.hash);
  console.log("pathname", location.pathname);
  console.log("search", location.search);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  console.log(classes.wrapper);
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <>
          <Navbar handleDrawerOpen={handleDrawerOpen} />
          <Sidenav
            mobileOpen={mobileOpen}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        </>
      )}

      {/* // registerianss our Routes  */}
      <Box
        className={
          location.pathname !== "/login" &&
          location.pathname !== "/register" &&
          classes.wrapper
        }
      >
        <Routes>
          {/* <Route path='/' component={<Dashboard />} /> */}
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addReport" element={<AddReport />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templateCenter" element={<TemplateCenter />} />
          <Route path="/totalReports" element={<Report />} />
          <Route path="/totalInspectors" element={<Inspectors />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/staffManagement" element={<StaffMangement />} />
          <Route path="/addNewStaff" element={<AddNewStaff />} />
          <Route path="/companyProfile" element={<CompanyProfile />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/createAgreement" element={<CreateAgreement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/scratchTemplate" element={<ScratchTemplate />} />
        </Routes>
      </Box>
    </div>
  );
}
