import { useState } from 'react'
import { Box, Tabs, Tab, makeStyles } from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
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
    <Box>
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
