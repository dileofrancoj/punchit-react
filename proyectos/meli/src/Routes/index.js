import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./../Pages/Home";
import Products from "./../Pages/Products";
import Example from "./../Pages/Example";
import Header from "./../Components/Header";
const Routes = ({ handlerSearch, search }) => {
  return (
    <Router>
      <Header handlerSearch={handlerSearch} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products">
          <Products search={search} />
        </Route>
        <Route path="/example" exact component={Example} />
      </Switch>
    </Router>
  );
};

export default Routes;
