import {
  TextField,
  makeStyles,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useClasses = makeStyles((theme) => ({
  input: {
    backgroundColor: "#f7f7f7",
    color: theme.palette.grey[600],
    padding: "0.5rem 1rem",
    borderRadius: theme.shape.borderRadius,
    "& .MuiAutocomplete-endAdornment": {
      right: "0.5rem",
    },
  },
}));

const Diagnosis = () => {
  const classes = useClasses();

  return (
    <Paper style={{ height: "100%" }}>
      <Box p={2}>
        <Typography variant="h6" paragraph>
          Diagnosis
        </Typography>
        <Autocomplete
          autoHighlight
          noOptionsText="No results"
          id="insurance-provider-lookup"
          options={[]}
          filterOptions={(options) => options}
          getOptionLabel={(option) => option.payer_name}
          getOptionSelected={(option, value) =>
            option.payer_name === value.payer_name
          }
          onInputChange={(e) => console.log(e)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search keywords or icd.10"
              autoFocus
              fullWidth
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                className: classes.input,
              }}
            />
          )}
        />
      </Box>
    </Paper>
  );
};

export { Diagnosis };
