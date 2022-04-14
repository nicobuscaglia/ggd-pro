import { Box, Button, TextField } from "@material-ui/core";
import { Field, Form } from "react-final-form";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const INPUT = {
  USER_TEXT_INPUT: "USER_TEXT_INPUT",
};

const InputForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name={INPUT.USER_TEXT_INPUT}
            render={({
              input,
              meta: { dirtySinceLastSubmit, submitError },
            }) => (
              <Box display="flex">
                <TextField
                  {...input}
                  autoFocus
                  InputProps={{
                    disableUnderline: true,
                    style: { fontSize: "1.3rem", fontWeight: 500 },
                  }}
                  // disabled={disabled}
                  fullWidth
                  // error={!!error}
                  // helperText={error || ""}
                  placeholder="Enter your response here"
                />
                <Button
                  color="secondary"
                  aria-label="Submit"
                  //   disabled={!input.value}
                  onClick={handleSubmit}
                >
                  <KeyboardArrowRightIcon />
                </Button>
              </Box>
            )}
          />
        </form>
      )}
    />
  );
};

export { InputForm };