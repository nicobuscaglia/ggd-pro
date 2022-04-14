import { Box } from "@material-ui/core";
import { MemberChat } from "../Chat";
import { CONVERSATION_EXAMPLE } from "../utils";

const PatientIntake = () => {
  return (
    // TODO: Adding padding around this component for now to fix
    // padding issue. Eventually add padding to display component
    <Box p={2}>
      <MemberChat conversation={CONVERSATION_EXAMPLE} />
    </Box>
  );
};

export { PatientIntake };
