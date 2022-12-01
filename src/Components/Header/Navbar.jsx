import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  TextField,
  Typography,
} from "@material-ui/core";

import "../../Assets/css/Navbar.css";
import { useStyles } from "./HeaderStyles";
import MenuIcon from "@material-ui/icons/Menu";
import { SearchOutlined } from "@material-ui/icons";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import "../../Assets/css/Navbar.css";

import Man from "../../Assets/images/imgMan.jpg";

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <div className="navbarSpectra">
          <TextField
            className={classes.root}
            id="standard-bare"
            variant="outlined"
            placeholder="Search Here"
            InputProps={{
              style: {
                height: "40px",
              },
              startAdornment: (
                <IconButton id="removeCircle">
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
          <span className="notification">
            <NotificationsNoneOutlinedIcon />
          </span>

          <img
            src={Man}
            className="rounded-circle sd"
            alt="avatar"
            width="35"
            height="35"
          />
          <span className="navbarName">John Doe</span>
        </div>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
