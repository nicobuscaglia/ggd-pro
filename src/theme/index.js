import { createTheme } from "@material-ui/core";
import typography from "./typography";
import overrides from "./overrides";
import props from "./props";
import palette from "./palette";
import shape from "./shape";
import breakpoints from "./breakpoints";

const theme = createTheme({
  typography,
  overrides,
  props,
  palette,
  shape,
  breakpoints,
});

export { theme };
