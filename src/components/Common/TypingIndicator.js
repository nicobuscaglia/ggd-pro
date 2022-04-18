import React from "react";
import { Grid, Box, Skeleton } from "@mui/material";
import PropTypes from "prop-types";

const TypingIndicator = ({ size = 6 }) => {
  return (
    <Box p={1}>
      <Grid container spacing={1}>
        {[...Array(3)].map((item, index) => (
          <Grid item key={index}>
            <Skeleton variant="circle" width={size} height={size} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

TypingIndicator.propTypes = {
  size: PropTypes.number,
};

export { TypingIndicator };
