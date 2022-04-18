import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const useClasses = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F5FAFF",
    borderRadius: "1rem",
    padding: "8px",
    width: "fit-content",
    alignSelf: "flex-end",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0F2FF",
    borderRadius: "1rem",
  },
  icon: {
    fontSize: "1.6rem",
    color: theme.palette.secondary.main,
    margin: "0 0.6rem",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 1.5rem 0.5rem 0.6rem",
  },
  title: {
    fontWeight: 400,
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    padding: 0,
  },
}));

const ValidatedAnswer = ({ message = {} }) => {
  const classes = useClasses();
  return (
    <Grid item className={classes.container}>
      <Grid container spacing={1} justifyContent="flex-start">
        <Grid item className={classes.iconContainer}>
          <CheckBoxIcon color="primary" className={classes.icon} />
        </Grid>
        <Grid item>
          <Grid container spacing={1} className={classes.textContainer}>
            <Box>
              <Typography variant="subtitle1" className={classes.title}>
                {message?.mainMsg}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" className={classes.subtitle}>
                {message?.subMsg}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { ValidatedAnswer };
