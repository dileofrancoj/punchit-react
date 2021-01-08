import { Alert, Row, Col, Button } from "react-bootstrap";

const pointer = {
  cursor: "pointer",
};

const Item = ({ id, work, deleteActivity }) => {
  const deleteWork = (e) => {
    const { id } = e.target;
    deleteActivity(id);
  };
  return (
    <Alert key={id} variant={"secondary"}>
      <Row className="justify-content-between">
        <Col md={10}>
          <input type="checkbox" /> {work}
        </Col>
        <Col md={2}>
          <p style={pointer} id={id} onClick={deleteWork}>
            🗑
          </p>
        </Col>
      </Row>
    </Alert>
  );
};

export default Item;
