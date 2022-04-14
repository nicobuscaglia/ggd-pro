import { useState } from "react";
import { Box, Tabs, Tab, makeStyles, Divider } from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundColor: theme.palette.background.default,
    borderRadius: "1rem",
    padding: "1rem 0",
  },
  tabs: {
    "&.MuiTabs-root": {
      minHeight: 0,
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
    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#000",
      borderRadius: "20px",
    },
    "& .MuiTabs-flexContainer": {
      marginLeft: theme.spacing(1),
    },
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const ProviderTabs = ({ tabs, updateConsultData }) => {
  const classes = useClasses();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Box my={2}>
        <Divider />
      </Box>
      {tabs.map((tab, index) => {
        return (
          <TabPanel
            key={index}
            value={value}
            index={index}
            children={tab.component}
          />
        );
      })}
    </Box>
  );
};

export { ProviderTabs };
