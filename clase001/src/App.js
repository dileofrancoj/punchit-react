import Header from "./Components/Header"; //default
import Footer from "./Components/Footer/";
import List from "./Components/List/";
import { name, lastname } from "./constants"; // constants
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <Row className="mt-5">
      <Col md={8} sm={12} className="bg-dark">
        <List />
      </Col>
      <Col md={4} sm={12}>
        <h3>Input</h3>
      </Col>
    </Row>
  );
};

const App = () => {
  //const edad = 26;

  /*
  const comprobarMayor = () => {
    if (edad >= 18) return "mayor";
    else return "menor";
  };
  */

  return (
    <Container fluid>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
export default App;
