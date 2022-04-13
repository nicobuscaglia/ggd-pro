import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";
import {
  Header,
  ProviderHeader,
  Diagnosis,
  EPrescribe,
  MedicalNotes,
  PatientIntake,
  PatientNotes,
  SymptomBotResult,
  VitalsBotResult,
  BenefitsChecker,
  ProviderTabs,
  VideoVisit,
} from "../components";

const LINK = process.env.REACT_APP_VIDEO_VISIT_URL;

const useClasses = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.ggd.gray,
    padding: "24px",
  },
  fixedContainer: {
    minHeight: '70vh',
    maxHeight: '70vh',
    overflow: 'hidden'
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  subTitleWithDot: {},
  dot: {
    fontSize: "5px !important",
    position: "relative",
    color: theme.palette.text.secondary,
    marginRight: "7px",
    marginLeft: "7px",
  },
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
  const [type, setType] = useState('sync')

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Header />
      <Box mb={2}>
        <ProviderHeader />
      </Box>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} className={classes.fixedContainer}>
            {type === "sync" ? <VideoVisit link={LINK} /> : <>Chat</>}
          </Grid>
          <Grid item xs={12} sm={4} className={classes.fixedContainer}>
            <ProviderTabs tabs={ResultsTabs} />
          </Grid>
        </Grid>
      </Box>
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
