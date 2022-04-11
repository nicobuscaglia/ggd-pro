import { Typography } from "@material-ui/core";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          element={
            <Typography variant="h1" color="textSecondary">
              GGDPro Lite
            </Typography>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
