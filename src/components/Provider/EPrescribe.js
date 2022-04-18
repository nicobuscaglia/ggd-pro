import { Paper, Typography, Box, Button } from "@mui/material";

const EPrescribe = () => {
  return (
    <Paper style={{ height: "100%", boxShadow: "none", backgroundColor: "#F7F7F7" }}>
      <Box p={2}>
        <Typography variant="h6" paragraph>
          Prescribe
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" disableElevation color="secondary">
            Start Prescription
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export { EPrescribe };
