import {
  TextField,
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useState } from "react";

const MOCK_OPTIONS = [
  {
    id: 1,
    label: "Influenza with pneumonia, other influenza virus identified",
    details: "Influenzal (broncho)pneumonia, other influenza virus identified",
    icd10Code: "J10.0",
  },
  {
    id: 2,
    label:
      "Influenza with other respiratory manifestations, other influenza virus identified",
    icd10Code: "J10.1",
  },
];

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
}));

const Diagnosis = () => {
  const classes = useClasses();

  const [diagnosis, setDiagnosis] = useState([]);

  const handleSelect = (value) => {
    setDiagnosis((diagnosis) => [...diagnosis, value]);
  };

  const handleDelete = (condition) =>
    setDiagnosis((diagnosis) =>
      diagnosis.filter(
        (currentCondition) => currentCondition.id !== condition.id
      )
    );

  return (
    <Paper style={{ height: "100%", boxShadow: "none" }}>
      <Box p={2}>
        <Typography variant="h6" paragraph>
          Diagnosis
        </Typography>
        <Autocomplete
          disableClearable
          onChange={(e, value) => value && handleSelect(value)}
          noOptionsText="No results"
          id="diagnosis-lookup"
          options={MOCK_OPTIONS}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search keywords or icd.10"
              variant="standard"
              autoFocus
              fullWidth
              InputProps={{
                ...params.InputProps,
                className: classes.input,
                disableUnderline: true,
              }}
            />
          )}
        />
        {/* TBD: decide how to display selected conditions once selected */}
        {diagnosis.length > 0 && (
          <Box my={2}>
            <Grid container spacing={2}>
              {diagnosis.map((diagnosis) => (
                <Grid item key={diagnosis.id} xs={12}>
                  <Card elevation={2}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {diagnosis.icd10Code}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {diagnosis.label}
                      </Typography>
                      {diagnosis.details && (
                        <Typography variant="body2" color="textSecondary">
                          {diagnosis.details}
                        </Typography>
                      )}
                      <Box display="flex" justifyContent="flex-end" mt={1}>
                        <IconButton onClick={() => handleDelete(diagnosis)}>
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export { Diagnosis };
