import { Box } from "@mui/material";
import { ProviderAccordion } from "../ProviderAccordion.js";
import { CONVERSATION_EXAMPLE } from "../utils/conversation-example.js";

const PATIENT_INTAKE = [
  {
    title: "Patient information",
    data: [
      {
        type: "text",
        title: "Full name",
        value: "John Doe",
      },
      {
        type: "text",
        title: "Date of birth",
        value: "05/12/1957",
      },
      {
        type: "text",
        title: "Gender",
        value: "Male",
      },
    ],
  },
  {
    title: "Reason For Visit",
    data: [
      {
        type: "text",
        title: null,
        value: "This is the reson for visit of this patient.",
      },
    ],
  },
  {
    title: "Existing Medical Conditions",
    data: [
      {
        type: "list",
        title: null,
        value: [
          { name: "Chronic kidney disease" },
          { name: "Pulmonary hypertension" },
          { name: "Bronchopulmonary dysplasia" },
        ],
      },
    ],
  },
  {
    title: "Allergies",
    data: [
      {
        type: "list",
        title: null,
        value: [
          { name: "Milk Allergy" },
          { name: "Egg Allergy" },
          { name: "Mold Allergy" },
        ],
      },
    ],
  },
  {
    title: "Current Medications",
    data: [
      {
        type: "list",
        title: null,
        value: [
          { name: "Acetaminophen" },
          { name: "Ibuprofen" },
          { name: "Omeprazole" },
        ],
      },
    ],
  },
  {
    title: "View Full Chat",
    data: [
      {
        type: "chat",
        title: null,
        value: CONVERSATION_EXAMPLE,
      },
    ],
  },
];

const PatientIntake = () => {
  return (
    // TODO: Adding padding around this component for now to fix
    // padding issue. Eventually add padding to display component
    <Box p={1}>
      <ProviderAccordion data={PATIENT_INTAKE} />
    </Box>
  );
};

export { PatientIntake };
