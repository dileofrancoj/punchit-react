import { Container, Row, Col } from "react-bootstrap";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";
function App() {
  return (
    <Container>
      <Header title={"ToDo APP"} />
      <Row>
        <Col>
          <Create />
        </Col>
        <Col>
          <List />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
