import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";

import "./App.css";
function App() {
  // cualquier cambio de estado en el app vuelve a ejecutar el return
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]); // error
  };

  const deleteActivity = (id) => {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  };

  return (
    <Container className="container ">
      <Header title={"ToDo APP"} />
      <Row className="justify-content-center">
        <Col md={8}>
          <Create addActivity={addActivity} />
        </Col>
        <Col md={8} className="mt-5">
          <List activities={activities} deleteActivity={deleteActivity} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
