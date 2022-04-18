import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getChatDateTime } from "../utils"
import { v4 as uuidv4 } from "uuid";

// TODO: This component uses same styling as Patient Notes, so extract common styling
// into reusable component

const useClasses = makeStyles((theme) => ({
  input: {
    backgroundColor: '#fff !important',
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

const MedicalNotes = ({ updateConsultInformation, noteType, medicalNotes = [], placeholder }) => {
  const classes = useClasses();
  const [notes, setNotes] = useState(medicalNotes)
  const [note, setNote] = useState()

  const onSubmit = () => {
    if (note) {
      const payload = {
        id: uuidv4(),
        name: 'James May NP',
        avatar: 'JM',
        dateTime: new Date(),
        message: note
      }
      setNotes([...notes, payload]);
      setNote("")
      updateConsultInformation({ [noteType]: true })
    }
  }

  return (
    <Box className={classes.container}>
      <Box p={2} style={{ backgroundColor: "#F7F7F7", borderRadius: "10px" }}>
      {notes.map((note, index) => {
        return (
          <Box key={index} mb={1} style={{ borderBottom: '1px solid #E2E2E2' }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    {/* TODO: Show the initials of the clinician or their actual avatar. */}
                    <Avatar>{note.avatar}</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.cardTitle}>
                      {note.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                {/* TODO: not sure if this is time that the message was last saved or current time. Placeholder for now. */}
                <Typography variant="body2" color="textSecondary">
                  {getChatDateTime(note.dateTime)}
                </Typography>
              </Grid>
            </Grid>
            <Box pl={5} mb={2}>
              <Typography variant="body2" color="textSecondary">
                 {note.message}
              </Typography>
            </Box>
          </Box>
        )
      })
      }
        <Box mb={1}>
          <TextField
            placeholder={`Enter your ${placeholder} notes here...`}
            variant="filled"
            fullWidth
            multiline
            value={note}
            onChange={(e) => {
              setNote(e.target.value)
            }
            }
            minRows={4}
            InputProps={{
              className: classes.input,
              disableUnderline: true,
            }}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" disableElevation color="secondary" onClick={onSubmit}>
            Save note
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { MedicalNotes };
