import { useState } from 'react'
import { Box, Tabs, Tab, makeStyles } from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundColor: theme.palette.background.default,
    borderRadius: "1rem",
    padding: "1rem 0",
  },
  fixedContainer: {
    maxHeight: "60vh",
    overflow: "scroll",
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
      padding: "2px 12px",
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
    <div
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

const ProviderTabs = ({ tabs }) => {
  const classes = useClasses()
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
      {tabs.map((tab, index) => {
        return (
          <Box key={index} className={classes.fixedContainer}>
            <TabPanel value={value} index={index} children={tab.component} />
          </Box>
        );
      })}
    </Box>
  );
};

export { ProviderTabs };
