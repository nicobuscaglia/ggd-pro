import { Container, Typography, Box, Grid, Paper } from "@material-ui/core";
import {
  Diagnosis,
  EPrescribe,
  MedicalNotes,
  PatientIntake,
  PatientNotes,
  SymptomBotResult,
  VitalsBotResult,
} from "../components";

const ViewProvider = () => {
  return (
    <Container maxWidth="xl">
      <Box mb={2}>
        <Typography variant="h1">Hi James May NP</Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={9}>
          Video Visit
        </Grid>
        <Grid item xs={12} sm={3}>
          <PatientIntake />
          <SymptomBotResult />
          <VitalsBotResult />
        </Grid>
      </Grid>
      <Paper variant="outlined">
        <Box p={2}>
          <Typography gutterBottom>Provider Actions</Typography>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <MedicalNotes />
              <PatientNotes />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Diagnosis />
            </Grid>
            <Grid item xs={12} sm={4}>
              <EPrescribe />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export { ViewProvider };
