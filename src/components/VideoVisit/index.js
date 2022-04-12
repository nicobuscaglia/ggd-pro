import { Box } from "@material-ui/core";

const VideoVisit = ({ link }) => {
  return (
    <Box height="100%">
      <iframe
        src={link}
        title="Provider Video Visit"
        style={{ width: "100%", height: "100%", borderRadius: '1rem' }}
        allow="camera; microphone"
        frameBorder="0"
      />
    </Box>
  );
};

export { VideoVisit };
