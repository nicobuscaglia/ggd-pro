import { Box, makeStyles } from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
  iframe: {
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    height: "100%",
  },
}));

const VideoVisit = ({ link }) => {
  const classes = useClasses();

  return (
    <Box height="100%">
      <iframe
        src={link}
        title="Provider Video Visit"
        className={classes.iframe}
        allow="camera; microphone"
        frameBorder="0"
      />
    </Box>
  );
};

export { VideoVisit };
