import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  label: {
    textTransform: "capitalize",
    marginRight: "2px",
  },
});

const DataGrid = ({ data, dataMapping, twoColumn = false }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {Object.keys(dataMapping)
        .filter((key) => data[key])
        .map((key, index) => (
          <Grid item xs={twoColumn ? 6 : 12} key={key} style={{ padding: 0 }}>
            <Box
              display="flex"
              textAlign={twoColumn && index % 2 !== 0 ? "right" : "left"}
              style={{ marginLeft: "4px" }}
            >
              {dataMapping[key].label && (
                <Typography
                  component="h6"
                  variant={dataMapping[key].style}
                  className={classes.label}
                  color="textSecondary"
                >
                  {dataMapping[key].label && dataMapping[key].label}
                </Typography>
              )}
              <Typography
                variant={dataMapping[key].style}
                color={dataMapping[key].color}
              >
                {dataMapping[key].renderFn
                  ? dataMapping[key].renderFn(data[key])
                  : data[key]}
              </Typography>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

DataGrid.propTypes = {
  data: PropTypes.object.isRequired,
  dataMapping: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    renderFn: PropTypes.func,
    twoColumn: PropTypes.bool,
  }),
};

export { DataGrid };
