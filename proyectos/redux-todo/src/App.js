import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todos from "./Pages/Todos";
import AddTodo from "./Components/AddTodo";
function App() {
  return (
    <Provider store={store}>
      <AddTodo />

      <Router>
        <Route path="/todos" component={Todos} />
        <Redirect to="/todos" />
      </Router>
    </Provider>
  );
}

export default App;
