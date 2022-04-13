import React from "react";
import {
  Paper as MuiPaper,
  withStyles,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const Paper = withStyles({
  root: {
    display: "inline-block",
    border: 0,
    borderRadius: "20px",
  },
})(MuiPaper);

const useStyles = makeStyles((theme) => ({
  paperLeft: {
    position: "relative",
    border: "1px solid",
    borderColor: theme.palette.grey[300],
  },
  paperLeftLast: {
    borderTopLeftRadius: 0,
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundColor: "#fff",
      top: "-8px",
      left: "-1px",
      height: "8px",
      width: "8px",
      border: "1px",
      borderStyle: "solid",
      borderBottom: "0",
      borderColor: theme.palette.grey[300],
    },
    "&::after": {
      content: "''",
      position: "absolute",
      backgroundColor: "#fff",
      top: "-8px",
      left: "-1px",
      height: "8px",
      width: "8px",
      border: "1px",
      borderStyle: "solid",
      borderTop: "0",
      borderRight: "0",
      borderColor: theme.palette.grey[300],
      borderBottomLeftRadius: "10px",
    },
  },
  paperRight: {
    background: "#222525",
    color: "#fff",
  },
  paperRightLast: {
    position: "relative",
    borderTopRightRadius: 0,
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundColor: "#222525",
      top: "-8px",
      right: "0",
      height: "8px",
      width: "8px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      backgroundColor: "#fff",
      top: "-8px",
      right: "0",
      height: "8px",
      width: "8px",
      borderBottomRightRadius: "10px",
    },
  },
}));

const TextBubble = ({ content, last = true, alignRight = false }) => {
  const classes = useStyles();

  return (
    <Box>
      <Paper
        className={`${alignRight ? classes.paperRight : classes.paperLeft} ${
          last
            ? alignRight
              ? classes.paperRightLast
              : classes.paperLeftLast
            : null
        }`}
      >
        <Box px={2} py={1}>
          <Typography color="inherit" component="div">
            {content}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

TextBubble.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  last: PropTypes.bool,
  alignRight: PropTypes.bool,
};

export { TextBubble };
