import { useState } from 'react'
import { Container, Typography, Box, Grid, Paper, makeStyles } from "@material-ui/core";
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
  VideoVisit,
} from "../components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const LINK = process.env.REACT_APP_VIDEO_VISIT_URL;

const useClasses = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.ggd.gray,
  },
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
      <Box mb={2} display="flex" alignItems="center">
        <Box mr={1}>
          <Typography variant="h3">Hi James May NP</Typography>
        </Box>
        <FiberManualRecordIcon className={classes.dot} />
        <Box mr={1}>
          <Typography variant="body2" color="textSecondary">
            Acne Prescription Visit
          </Typography>
        </Box>
        <FiberManualRecordIcon className={classes.dot} />
        <Box mr={1}>
          <Typography variant="body2" color="textSecondary">
            22 hours ago.
          </Typography>
        </Box>
      </Box>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} style={{ minHeight: "60vh" }}>
            {type === "sync" ? <VideoVisit link={LINK} /> : <>Chat</>}
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProviderTabs tabs={ResultsTabs} />
          </Grid>
        </Grid>
      </Box>
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
