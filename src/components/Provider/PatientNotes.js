import {
  Box,
  TextField,
  Button,
  Typography,
  makeStyles,
  Grid,
  Avatar,
} from "@material-ui/core";

// TODO: This component uses same styling as Medical Notes, so extract common styling
// into reusable component

const useClasses = makeStyles((theme) => ({
  cardTitle: {
    color: theme.palette.blue.main,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: "0.9rem",
    paddingTop: "2px",
    backgroundColor: "#fc0",
  },
}));

const PatientNotes = ({ consultInformation, updateConsultInformation }) => {
  const classes = useClasses();

  return (
    <Box p={2}>
      <Box p={2} style={{ backgroundColor: "#f7f7f7", borderRadius: "10px" }}>
        <Box mb={1}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  {/*TODO: Show the initials of the clinician or their actual
                    avatar.*/}
                  <Avatar className={classes.avatar}>JM</Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="body2" className={classes.cardTitle}>
                    James May, NP
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/*TODO: not sure if this is time that the message was last saved
                or current time. Placeholder for now.
                */}
              <Typography variant="body2" color="textSecondary">
                10:52PM
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <TextField
          placeholder="Enter your patient notes here..."
          fullWidth
          autoFocus
          multiline
          value={consultInformation.patientNote}
          onChange={(e) =>
            updateConsultInformation({ patientNote: e.target.value })
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

export { PatientNotes };
