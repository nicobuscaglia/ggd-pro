import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./Routes";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
