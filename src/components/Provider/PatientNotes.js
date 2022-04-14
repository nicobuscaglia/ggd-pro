import { Box, TextField, Button } from "@material-ui/core";

const PatientNotes = () => {
  return (
    <Box p={2}>
      <Box
        px={2}
        py={1}
        style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}
      >
        <TextField
          placeholder="Enter your patient notes here..."
          fullWidth
          autoFocus
          multiline
          //   value={note}
          //   onChange={(e) => setNote(e.target.value)}
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

export { PatientNotes };
