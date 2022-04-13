import {
  Paper,
  Box,
  Typography,
  Grid,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
  subtitle: {
    fontWeight: 500,
  },
  titleContainer: {
    backgroundColor: theme.palette.ggd.gray,
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
  },
  titleContainerNoContent: {
    backgroundColor: theme.palette.ggd.gray,
    borderRadius: "inherit",
  },
}));

const InformationCard = ({ title, subtitle, topRight, content = [] }) => {
  const classes = useClasses();

  return (
    <Paper variant="outlined">
      <Box
        p={2}
        className={
          content.length
            ? classes.titleContainer
            : classes.titleContainerNoContent
        }
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="baseline"
          spacing={1}
        >
          <Grid item xs>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            {subtitle && (
              <Typography color="textSecondary" variant="body2">
                {subtitle}
              </Typography>
            )}
          </Grid>
          {topRight && (
            <Grid item>
              <Typography
                color="textSecondary"
                className={classes.subtitle}
                style={{ marginTop: "3px" }}
              >
                {topRight}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      {content.length > 0 && (
        <Box mb={2}>
          <Divider />
        </Box>
      )}
      {content && Array.isArray(content) && content.length > 0 && (
        <Box mb={2}>
          {content.map((content, index) => (
            <Box px={2} mb={1} key={index}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                {content.left && (
                  <Grid item xs={3} sm={2}>
                    <Box textAlign="center">{content.left}</Box>
                  </Grid>
                )}
                {(content.title || content.secondaryText) && (
                  <Grid item xs={9} sm={10}>
                    {content.title && (
                      <Typography className={classes.subtitle}>
                        {content.title}
                      </Typography>
                    )}
                    {content.secondaryText && (
                      <Typography color="textSecondary" variant="body2">
                        {content.secondaryText}
                      </Typography>
                    )}
                  </Grid>
                )}
              </Grid>
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export { InformationCard };
