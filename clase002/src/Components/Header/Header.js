/*Components/Header/Header */
import { Row, Col } from "react-bootstrap";
const Header = ({ title, likes }) => {
  return (
    <Row className="mt-5 mb-5">
      <Col md={12}>
        <h2 className="text-center">
          {title} | Likes : {likes}
        </h2>
        <hr />
      </Col>
    </Row>
  );
};

export default Header;
