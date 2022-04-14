import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { ViewProvider } from "./views";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<ViewProvider />} />
        <Route path="/:type" element={<ViewProvider />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
