import { Container, Typography, Box, Grid, Paper } from "@material-ui/core";
import {
  Diagnosis,
  EPrescribe,
  MedicalNotes,
  PatientIntake,
  PatientNotes,
  SymptomBotResult,
  VitalsBotResult,
  BenefitsChecker,
  ProviderTabs
} from "../components";

const ResultsTabs = [
  {
    title: "Patient Intake",
    component: <PatientIntake />,
  },
  {
    title: "SymptomBot",
    component: <SymptomBotResult />,
  },
  {
    title: "VitalsBot",
    component: <VitalsBotResult />,
  },
  {
    title: "BenefitsChecker",
    component: <BenefitsChecker />,
  },
];

const NotesTabs = [
  {
    title: "Medical Notes",
    component: <MedicalNotes />,
  },
  {
    title: "Patient Notes",
    component: <PatientNotes />,
  },
];

const ViewProvider = () => {
  return (
    <Container maxWidth="xl">
      <Box mb={2}>
        <Typography variant="h1">Hi James May NP</Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={8}>
          Video Visit
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProviderTabs tabs={ResultsTabs} />
        </Grid>
      </Grid>
      <Paper variant="outlined">
        <Box p={2}>
          <Typography gutterBottom>Provider Actions</Typography>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <ProviderTabs tabs={NotesTabs} />
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
