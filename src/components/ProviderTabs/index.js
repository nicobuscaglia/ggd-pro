import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useClasses = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundColor: theme.palette.background.default,
    borderRadius: "0.5rem",
    padding: "1rem 0",
  },
  fixedContainer: {
    maxHeight: "60vh",
    overflow: "scroll",
  },
  tabs: {
    "&.MuiTabs-root": {
      minHeight: 0,
      borderBottom: "1px solid",
      borderBottomColor: theme.palette.ggd.darkGray,
      paddingBottom: "0.7rem",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: "1rem",
      fontFamily: "Roboto",
      minWidth: 0,
      minHeight: "25px",
      padding: "0 12px",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
}));

const TabPanel = (props) => {
  const { component, value, index, ...other } = props;

  return (
    <Box hidden={value !== index} {...other}>
      {value === index && <Box>{component}</Box>}
    </Box>
  );
};

const ProviderTabs = ({ tabs, setTabSelected = () => {} }) => {
  const classes = useClasses();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabSelected(newValue)
  };

  return (
    <Box className={classes.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Provider View Tabs"
        variant="scrollable"
        scrollButtons="auto"
        className={classes.tabs}
      >
        {tabs.map((tab, index) => {
          return <Tab key={index} label={tab.title} />;
        })}
      </Tabs>
      {tabs.map((tab, index) => {
        return (
          <Box key={index} className={classes.fixedContainer}>
            <TabPanel value={value} index={index} component={tab.component} />
          </Box>
        );
      })}
    </Box>
  );
};

export { ProviderTabs };
