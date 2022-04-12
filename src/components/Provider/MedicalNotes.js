import { Paper, Box, Typography, TextField, Button } from "@material-ui/core";

const MedicalNotes = () => {
  return (
    <Paper style={{ height: "100%" }}>
      <Box p={2}>
        <Typography variant="h6" paragraph>
          Medical Notes
        </Typography>
        <Box
          px={2}
          py={1}
          style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}
        >
          <TextField
            fullWidth
            autoFocus
            multiline
            rows={4}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Button color="secondary">Save</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export { MedicalNotes };
