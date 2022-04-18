import {
  Box,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MessageGroup } from "../Common";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { InformationCard } from "../Cards";

const useClasses = makeStyles((theme) => ({
  progressBar: {
    borderRadius: "5px",
  },
}));

const CAPTIONS = {
  here: {
    "en-us": "Here are patient results.",
    "es-mx": "Aquí están sus resultados.",
  },
  results: {
    "en-us": "Results",
    "es-mx": "Resultados",
  },
  please: {
    "en-us":
      "Please note that the list below may not be complete and is provided solely for information purposes and is not a qualified medical opinion.",
    "es-mx":
      "Por favor, tenga en cuenta que la lista siguiente puede no estar completa y es provista únicamente con fines informativos y no es una opinión médica calificada.",
  },
  noResults: {
    "en-us": "No results available.",
    "es-mx": "Sin resultados disponibles.",
  },
  unfortunately: {
    "en-us":
      "Your answers did not produce a result. Please try again or visit the GoGetDoc help center.",
    "es-mx":
      "Sus respuestas no produjeron ningún resultado. Vuelva a intentarlo o visite el centro de ayuda de GoGetDoc.",
  },
  evidenceLevel: {
    Strong: {
      "en-us": "Strong",
      "es-mx": "Fuerte",
    },
    Moderate: {
      "en-us": "Moderate",
      "es-mx": "Moderada",
    },
    Low: {
      "en-us": "Low",
      "es-mx": "Baja",
    },
  },
  evidence: {
    "en-us": "evidence",
    "es-mx": "evidencia",
  },
  recommendation: {
    "en-us": "Recommendation",
    "es-mx": "Recomendación",
  },
  goTo: {
    "en-us": "Go to the nearest emergency department",
    "es-mx": "Vaya al servicio de urgencias más cercano",
  },
  symptoms: {
    "en-us":
      "Your symptoms appear serious and may require urgent care. If you can’t get to an emergency department, please call an ambulance.",
    "es-mx":
      "Sus síntomas parecen serios y pueden requerir atención urgente. Si no puede llegar al departamento de emergencias, llame a una ambulancia.",
  },
  alarming: {
    "en-us": "Alarming symptoms",
    "es-mx": "Síntomas alarmantes",
  },
};

const SymptomBotResult = ({ msgId, messages, results = {} }) => {
  const classes = useClasses();

  results = {
    hasEmergencyEvidence: false,
    probableConditions: [
      {
        id: "c_1166",
        name: "Acute viral rhinosinusitis",
        commonName: "Acute viral sinusitis",
        probability: 0.7164,
        evidenceLevel: "Strong",
      },
      {
        id: "c_87",
        name: "Common cold",
        commonName: "Common cold",
        probability: 0.3728,
        evidenceLevel: "Strong",
      },
      {
        id: "c_1172",
        name: "Acute bacterial rhinosinusitis",
        commonName: "Acute bacterial sinusitis",
        probability: 0.1177,
        evidenceLevel: "Moderate",
      },
    ],
    ggdStopSCFlow: true,
    explication: null,
    instruction: null,
    seriousSymptoms: [],
  };

  const probableConditions = results.probableConditions || [];

  let conditions = probableConditions.filter(
    (condition) => condition.evidenceLevel === "Strong"
  );
  if (conditions.length === 0) {
    conditions = probableConditions.filter(
      (condition) => condition.evidenceLevel === "Moderate"
    );
  }
  if (conditions.length === 0) {
    conditions = probableConditions.filter(
      (condition) => condition.evidenceLevel === "Low"
    );
  }

  const isEmergency = results.hasEmergencyEvidence || false;
  const symptoms = (results.seriousSymptoms || [])
    .filter((symptom) => symptom.isEmergency)
    .map((symptom) => symptom.commonName);

  return (
    // TODO: Adding padding around this component for now to fix
    // padding issue. Eventually add padding to display component
    <Box p={2}>
      <MessageGroup
        messages={messages || [CAPTIONS.here["en-us"]]}
        messageId={msgId}
        messageTime={new Date()}
      />
      {isEmergency && (
        <Box
          my={3}
          style={{
            marginLeft: "45px",
            border: "solid 1px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
          data-cy="emergency_results"
        >
          <Grid container wrap="nowrap">
            <Grid
              item
              style={{
                width: 100,
                backgroundColor: "#FFC200",
                textAlign: "center",
              }}
            >
              <ErrorOutlineIcon
                style={{ color: "white", fontSize: 60, marginTop: 16 }}
              />
            </Grid>
            <Grid item style={{ marginLeft: 16, padding: 8, width: "70%" }}>
              <Typography
                variant="body2"
                style={{
                  color: "#0062FF",
                  margin: "20px 0px 0px 0px",
                  fontSize: 14,
                }}
              >
                {CAPTIONS.recommendation["en-us"]}
              </Typography>
              <Typography variant="h5">{CAPTIONS.goTo["en-us"]}</Typography>
              <Typography
                variant="body2"
                style={{ color: "#92929D", margin: "20px 0px", fontSize: 14 }}
              >
                {CAPTIONS.symptoms["en-us"]}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#171725",
                  margin: "20px 0px 0px 0px",
                  fontSize: 14,
                }}
              >
                {CAPTIONS.alarming["en-us"]}
              </Typography>
              {symptoms &&
                symptoms.map((symptom) => (
                  <Typography
                    key={symptom}
                    variant="body2"
                    style={{
                      color: "#171725",
                      margin: "8px 0px",
                      fontSize: 14,
                    }}
                  >
                    {symptom}
                  </Typography>
                ))}
            </Grid>
          </Grid>
        </Box>
      )}
      <Box mt={3} data-cy="symptombot_results">
        {conditions && conditions.length > 0 ? (
          <InformationCard
            title={CAPTIONS.results["en-us"]}
            subtitle={CAPTIONS.please["en-us"]}
            content={conditions.map((condition) => ({
              left: (
                <LinearProgress
                  variant="determinate"
                  value={condition.probability * 100}
                  className={classes.progressBar}
                />
              ),
              title: condition.commonName,
              secondaryText: `${
                CAPTIONS.evidenceLevel[condition.evidenceLevel]["en-us"]
              } ${CAPTIONS.evidence["en-us"]}`,
            }))}
          />
        ) : (
          <InformationCard
            title={CAPTIONS.noResults["en-us"]}
            subtitle={CAPTIONS.unfortunately["en-us"]}
          />
        )}
      </Box>
    </Box>
  );
};

export { SymptomBotResult };
