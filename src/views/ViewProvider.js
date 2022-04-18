import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Drawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import {
  Header,
  ProviderHeader,
  MedicalNotes,
  PatientIntake,
  SymptomBotResult,
  VitalsBotResult,
  BenefitsChecker,
  ProviderTabs,
  VideoVisit,
  ChatHOC,
  Diagnosis, 
  EPrescribe
} from "../components";
import { useParams } from "react-router-dom";

const LINK = `${process.env.REACT_APP_VIDEO_VISIT_URL}/room/nicolas-buscaglia-general-visit-2022-1-1-18-55/member/Patient/practitioner/Provider`;

const useClasses = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.ggd.gray,
    padding: "24px",
  },
  fixedContainer: {
    minHeight: "70vh",
    maxHeight: "70vh",
    overflow: "hidden",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  dot: {
    fontSize: "5px !important",
    position: "relative",
    color: theme.palette.text.secondary,
    marginRight: "7px",
    marginLeft: "7px",
  },
}));

const MEDICAL_NOTES = [
  {
    id: 1,
    name: 'James May NP',
    avatar: 'JM',
    dateTime: new Date(),
    message: 'This is a medical note.'
  }
]

const DIAGNOSIS_NOTES = [
  {
    id: 1,
    name: 'James May NP',
    avatar: 'JM',
    dateTime: new Date(),
    message: 'This is a diagnosis note.'
  }
]

const ViewProvider = () => {
  const classes = useClasses();
  const { type } = useParams();
  const [requiredFields, setRequiredFields] = useState([]);
  const [tabSelected, setTabSelected] = useState(0)

  const [consultInformation, setConsultInformation] = useState({});

  const updateConsultInformation = (newConsultInformation) => {
    setConsultInformation((consultInformation) => ({
      ...consultInformation,
      ...newConsultInformation,
    }));
  };

  const onPatientInfo = (data) => {
    console.log('NMB', data)
  }

  const onSubmit = () => {
    console.log('submit')
  }

  useEffect(() => {
    setRequiredFields([
      { label: "Medical Note", stateKey: "medicalNote" },
      {
        label: EndVisitTabs[tabSelected].title,
        stateKey: EndVisitTabs[tabSelected].stateKey,
      },
    ]);
  }, [])

  useEffect(() => {
    if (EndVisitTabs[tabSelected]?.title) {
      setRequiredFields([
        { label: "Medical Note", stateKey: "medicalNote" },
        {
          label: EndVisitTabs[tabSelected].title,
          stateKey: EndVisitTabs[tabSelected].stateKey,
        },
      ]);
    }
  }, [tabSelected])


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
      component: (
        <Box p={2}>
          <MedicalNotes
            consultInformation={consultInformation}
            updateConsultInformation={updateConsultInformation}
            noteType="medicalNote"
            medicalNotes={MEDICAL_NOTES}
            placeholder="medical"
          />
        </Box>
      ),
    },
  ];

  const EndVisitTabs = [
    {
      title: "Diagnosis",
      stateKey: "diagnosis",
      component: (
        <Box p={2}>
          <Box mb={2}>
            <MedicalNotes
              consultInformation={consultInformation}
              updateConsultInformation={updateConsultInformation}
              noteType="diagnosis"
              medicalNotes={DIAGNOSIS_NOTES}
              placeholder="diagnosis"
            />
          </Box>
          <Box mb={2}>
            <Diagnosis />
          </Box>
          <Box>
            <EPrescribe />
          </Box>
        </Box>
      ),
    },
    {
      title: "Refer Out",
      stateKey: 'referOut',
      component: (
        <Box p={2}>
          <MedicalNotes
            consultInformation={consultInformation}
            updateConsultInformation={updateConsultInformation}
            noteType="referOut"
            placeholder="refer out"
          />
        </Box>
      ),
    },
    {
      title: "No-Show",
      stateKey: 'noShow',
      component: (
        <Box p={2}>
          <MedicalNotes
            consultInformation={consultInformation}
            updateConsultInformation={updateConsultInformation}
            noteType="noShow"
            placeholder="no-show"
          />
        </Box>
      ),
    },
    {
      title: "Other",
      stateKey: 'other',
      component: (
        <Box p={2}>
          <MedicalNotes
            consultInformation={consultInformation}
            updateConsultInformation={updateConsultInformation}
            noteType="other"
            placeholder="other"
          />
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box className={classes.container}>
        <Header />
        <Box my={2}>
          <ProviderHeader />
        </Box>
        <Box mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} className={classes.fixedContainer}>
              {type === "async" ? <ChatHOC /> : <VideoVisit link={LINK} />}
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
              <Grid item xs={12} sm={8}>
                <ProviderTabs
                  tabs={EndVisitTabs}
                  setTabSelected={setTabSelected}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
        {/* Temp. solution to create space for drawer. */}
        <Box py={4} />
      </Box>
      <Drawer anchor="bottom" variant="permanent">
        <Paper square>
          <Box p={2}>
            <Grid
              container
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              {requiredFields.map((data, index) => (
                <Grid
                  key={index}
                  item
                  style={{
                    color: consultInformation[data.stateKey] ? "green" : "#bbb",
                  }}
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <Typography variant="body2">{data.label}</Typography>
                    </Grid>
                    <Grid item>
                      <CheckCircleOutlinedIcon
                        fontSize="small"
                        color="inherit"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
              <Grid item>
                <Button
                  variant="contained"
                  disableElevation
                  color="secondary"
                  disabled={
                    !consultInformation.medicalNote ||
                    !consultInformation[EndVisitTabs[tabSelected].stateKey]
                  }
                  onClick={onSubmit}
                >
                  Complete Visit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Drawer>
    </>
  );
};

export { ViewProvider };
