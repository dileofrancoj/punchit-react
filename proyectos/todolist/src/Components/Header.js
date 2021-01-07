import { Row, Col } from "react-bootstrap";
const Header = ({ title }) => {
  return (
    <Row>
      <Col>
        <h1 className="text-center">{title}</h1>
      </Col>
    </Row>
  );
};

export default Header;
