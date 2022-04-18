import {
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "inline-block",
  },
  paperLeft: {
    position: "relative",
    border: "1px solid",
    borderRadius: "0 20px 20px 20px !important",
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
    background: "#222525 !important",
    color: "#fff !important",
    borderRadius: "20px 0 20px 20px !important",
  },
  paperRightLast: {
    position: "relative",
    borderTopRightRadius: "0 !important",
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
        elevation={0}
        className={`${classes.paper} ${
          alignRight ? classes.paperRight : classes.paperLeft
        } ${
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
