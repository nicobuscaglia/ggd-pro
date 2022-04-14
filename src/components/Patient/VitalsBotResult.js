import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
// import { v4 as uuidv4 } from "uuid";
import { MessageGroup } from "../Common/MessageGroup";
// import { getMemberClinicalResult, notifyAppNotification } from "../../events";
import { getBPColor, getHRColor } from "../utils";
import { GGDLoader } from "../Common/GGDLoader";

const useClasses = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    margin: "1rem 0",
  },
  containerMessage: {
    margin: "1rem 0 0 0",
    // [theme.breakpoints.up("sm")]: {
    //   margin: "1rem 0 0 3rem",
    // },
  },
  vitalSignContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0.4rem",
    backgroundColor: theme.palette.background,
    borderRadius: "0.5rem",
    boxShadow: "0 0 5px rgb(0 0 0 / 20%)",
  },
  type: {
    fontSize: "0.6rem",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
  },
  measurement: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
}));

const VitalsBotResult = ({ conversationId, showMessage = true }) => {
  const classes = useClasses();
  const [stressLevel, setStressLevel] = useState();
  const [vitalSigns, setVitalSigns] = useState([]);
  const [vitalSignsResults, setVitalSignsResults] = useState();
  const [loading, setLoading] = useState(true);

  const VBResults = [
    {
      name: "Systolic Blood Pressure",
      value: "118",
      probability: null,
    },
    {
      name: "Breathing Rate",
      value: "10",
      probability: null,
    },
    {
      name: "Heart Rate",
      value: "93",
      probability: null,
    },
    {
      name: "Diastolic Blood Pressure",
      value: "65",
      probability: null,
    },
    {
      name: "Breathing Rate",
      value: "12",
      probability: null,
    },
    {
      name: "Diastolic Blood Pressure",
      value: "71",
      probability: null,
    },
    {
      name: "Heart Rate",
      value: "84",
      probability: null,
    },
  ];

  // const handleResults = (error, data) => {
  //   setLoading(false);
  //   if (!error) {
  //     const getResults = data.find((result) => result.id === conversationId);
  //     if (getResults) {
  //       setVitalSigns(getResults.results);
  //     }
  //   } else {
  //     console.error("Error occurred when getting Vital Signs Results", error);
  //     notifyAppNotification(null, {
  //       error:
  //         "An error occurred. Please try again. If error persists, visit the GoGetDoc help center.",
  //     });
  //   }
  // };

  useEffect(() => {
    // getMemberClinicalResult(handleResults, {});
    setVitalSigns(VBResults);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (vitalSigns.length) {
      const systolic = vitalSigns.find((sign) => {
        return sign.name === "Systolic Blood Pressure";
      });
      const diastolic = vitalSigns.find((sign) => {
        return sign.name === "Diastolic Blood Pressure";
      });
      if (systolic && diastolic) {
        const bloodPressureDisplay =
          systolic?.value && diastolic?.value
            ? `${systolic?.value}/${diastolic.value}`
            : "--";
        const bloodPressure = {
          name: "Blood Pressure",
          value: bloodPressureDisplay,
          color: getBPColor(systolic.value, diastolic.value),
        };
        setVitalSignsResults([bloodPressure, ...vitalSigns]);
      } else {
        setVitalSignsResults([...vitalSigns]);
      }
    }
  }, [vitalSigns]);

  const resolveStressLevel = (measurement) => {
    switch (measurement) {
      case "0":
        return "Unkown";
      case "1":
        return "Low";
      case "2":
        return "Normal";
      case "3":
        return "Mild";
      case "4":
        return "High";
      case "5":
        return "Very high";
      default:
        return "Unknown"
    }
  };

  const getVitalSignColor = (name, value, color) => {
    if (name === "Heart Rate") {
      return getHRColor(value);
    }
    return color;
  };

  const VitalSign = ({ vital }) => {
    const { name, value, color } = vital;
    if (name === "Stress Level") {
      const level = resolveStressLevel(value);
      setStressLevel(level);
    }
    return (
      <Box className={classes.vitalSignContainer}>
        <Typography variant="body2" className={classes.type}>
          {name}
        </Typography>
        <Typography
          className={classes.measurement}
          style={{ color: getVitalSignColor(name, value, color) }}
        >
          {name === "Stress Level" ? stressLevel || "--" : value || "--"}
        </Typography>
      </Box>
    );
  };

  if (!vitalSignsResults || !vitalSigns) return "";

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <GGDLoader />
      </Box>
    );
  }

  return (
    <>
      {showMessage && (
        <MessageGroup
          messages={["Here are patient results"]}
          // messageId={uuidv4()}
          messageTime={new Date()}
        />
      )}
      <Box
        display="flex"
        className={showMessage ? classes.containerMessage : classes.container}
      >
        {vitalSignsResults.map((vitalSign, index) => {
          if (
            vitalSign.name !== "Systolic Blood Pressure" &&
            vitalSign.name !== "Diastolic Blood Pressure"
          ) {
            return (
              <Box p={0.5} key={index}>
                <VitalSign vital={vitalSign} />
              </Box>
            );
          } else {
            return "";
          }
        })}
      </Box>
    </>
  );
};

export { VitalsBotResult };
