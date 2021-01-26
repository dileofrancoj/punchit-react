import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoutes />
      </Switch>
    </Router>
  );
};

export default Routes;
