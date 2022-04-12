import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  Diagnosis,
  EPrescribe,
  MedicalNotes,
  PatientIntake,
  PatientNotes,
  SymptomBotResult,
  VitalsBotResult,
  BenefitsChecker,
  ProviderTabs,
} from "../components";

const useClasses = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f7f7f7",
    padding: "24px",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  subTitleWithDot: {},
}));
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
  const classes = useClasses();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box mb={2}>
        <Typography variant="h1">
          Hi James May NP{" "}
          <span className={classes.subtitle}>Acne Prescription Visit</span>{" "}
          <span></span>
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={8}>
          Video Visit
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProviderTabs tabs={ResultsTabs} />
        </Grid>
      </Grid>
      <Paper variant="outlined" style={{ backgroundColor: "transparent" }}>
        <Box p={2}>
          <Typography variant="h6" color="textSecondary" paragraph>
            Provider Actions
          </Typography>
          <Grid container spacing={2}>
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
