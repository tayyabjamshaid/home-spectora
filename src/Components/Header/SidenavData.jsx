import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import TaskIcon from "@mui/icons-material/Task";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Add New Report", link: "/addReport", icon: <SaveAsIcon /> },
    {
      label: "Templates",
      link: "/templates",
      icon: <ViewComfyIcon />,
    },
    {
      label: "Reports",
      link: "/totalReports",
      icon: <TaskIcon />,
    },
    { label: "Inspectors", link: "/totalInspectors", icon: <PersonIcon /> },
    { label: "Settings", link: "/settings", icon: <SettingsIcon /> },
    {
      label: "Staff Management",
      link: "/staffManagement",
      icon: <GroupIcon />,
    },
  ];
  return (
    <List>
      <ListItem
        exact="true"
        component={NavLink}
        to="/"
        className="align"
        activeclassname={classes.activeNavlinks}
      >
        <ListItemText>Home Inspection</ListItemText>
      </ListItem>
      {listItemData.map((item, i) => (
        <Button
          size="small"
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}
        >
          <ListItem
            exact="true"
            component={NavLink}
            style={{ color: "white" }}
            to={item.link}
            className={classes.navlinks}
            activeclassname={classes.activeNavlinks}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
      <div className="logout">
        <ListItem
          exact="true"
          component={NavLink}
          to="/"
          activeclassname={classes.activeNavlinks}
        >
          <ListItemIcon>
            <ArrowCircleLeftIcon />
          </ListItemIcon>

          <ListItemText>Logout</ListItemText>
        </ListItem>
        <p className="sidebarPara">ALL RIGHTS RESERVED</p>
      </div>
    </List>
  );
}
