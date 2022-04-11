import { CssBaseline, ThemeProvider } from "@material-ui/core";
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
