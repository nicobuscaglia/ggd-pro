import { Box, TextField, Button } from "@material-ui/core";

const MedicalNotes = ({ consultInformation, updateConsultInformation }) => {
  return (
    <Box p={2}>
      <Box
        px={2}
        py={1}
        style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}
      >
        <TextField
          placeholder="Enter your medical notes here..."
          fullWidth
          autoFocus
          multiline
          value={consultInformation.medicalNote}
          onChange={(e) =>
            updateConsultInformation({ medicalNote: e.target.value })
          }
          minRows={4}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button color="secondary">Save</Button>
      </Box>
    </Box>
  );
};

export { MedicalNotes };
