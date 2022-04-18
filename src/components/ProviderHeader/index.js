import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const useClasses = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    fontSize: "5px !important",
    position: "relative",
    color: theme.palette.text.secondary,
    marginRight: "7px",
    marginLeft: "7px",
  },
  visibleDot: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));

const ProviderHeader = () => {
    const classes = useClasses()
    return (
      <Box className={classes.container}>
        <Box>
          <Typography variant="h3">Hi James May NP</Typography>
        </Box>
        <FiberManualRecordIcon className={`${classes.dot} ${classes.visibleDot}`} />
        <Box className={classes.subContainer} >
          <Box>
            <Typography variant="body2" color="textSecondary">
              Acne Prescription Visit
            </Typography>
          </Box>
          <FiberManualRecordIcon className={classes.dot} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              22 hours ago.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
};

export { ProviderHeader };
