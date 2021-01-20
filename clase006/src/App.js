import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Nav from "./components/common/Nav";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/register" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
