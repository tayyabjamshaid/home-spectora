import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../../Assets/css/Tabs.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabss() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Arura Templates" {...a11yProps(0)} />
          <Tab label="Company Templates" {...a11yProps(1)} />
          <Tab label="My Templates" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div id="Arura" className="tabcontent">
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div id="Arura" className="tabcontent">
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div id="Arura" className="tabcontent">
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
          <div className="tabPart">
            <span style={{ "fontWeight": "bold" }}>LOGO</span>
            <span style={{ "paddingTop": "20px" }}>
              ASHI RESIDENTAL TEMPLATE
            </span>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
