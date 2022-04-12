import { Paper, Typography, Box, Button } from "@material-ui/core";

const EPrescribe = () => {
  return (
    <Paper style={{ height: "100%" }}>
      <Box p={2}>
        <Typography variant="h6" paragraph>
          Prescribe
        </Typography>
        <Box align="center">
          <Button color="secondary">Start Prescription</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export { EPrescribe };
