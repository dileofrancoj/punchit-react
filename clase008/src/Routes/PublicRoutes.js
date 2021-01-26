import { Route } from "react-router-dom";
import Login from "./../Pages/Login";
import Dashboard from "./../Pages/Dashboard";
const PublicRoutes = () => {
  return (
    <>
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </>
  );
};

export default PublicRoutes;
