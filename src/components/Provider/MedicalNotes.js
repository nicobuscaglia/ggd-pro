import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// TODO: This component uses same styling as Patient Notes, so extract common styling
// into reusable component

const useClasses = makeStyles((theme) => ({
  input: {
    backgroundColor: "#f7f7f7",
    color: theme.palette.grey[600],
    padding: "0.5rem 1rem !important",
    borderRadius: theme.shape.borderRadius,
    "& .MuiAutocomplete-endAdornment": {
      right: "0.5rem",
    },
  },
  cardTitle: {
    color: theme.palette.blue.main,
  },
  container: {
    "& .MuiAvatar-root": {
      width: theme.spacing(4),
      height: theme.spacing(4),
      fontSize: "0.9rem",
      paddingTop: "2px",
      backgroundColor: "#fc0",
    },
  }
}));

const MedicalNotes = ({ consultInformation, updateConsultInformation }) => {
  const classes = useClasses();

  return (
    <Box p={2} className={classes.container}>
      <Box p={2} style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}>
        <Box mb={1}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  {/* TODO: Show the initials of the clinician or their actual avatar. */}
                  <Avatar>JM</Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="body2" className={classes.cardTitle}>
                    James May, NP
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* TODO: not sure if this is time that the message was last saved or current time. Placeholder for now. */}
              <Typography variant="body2" color="textSecondary">
                10:52PM
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mb={1}>
          <TextField
            placeholder="Enter your medical notes here..."
            variant="filled"
            fullWidth
            autoFocus
            multiline
            value={consultInformation.medicalNote}
            onChange={(e) =>
              updateConsultInformation({ medicalNote: e.target.value })
            }
            minRows={4}
            InputProps={{
              className: classes.input,
              disableUnderline: true,
            }}
          />
        </Box>
        <Button variant="contained" disableElevation color="secondary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export { MedicalNotes };
