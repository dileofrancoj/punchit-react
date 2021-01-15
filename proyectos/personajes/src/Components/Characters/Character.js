import moment from "moment";
import { Col, Card, Button } from "react-bootstrap";

const Character = ({ image, name, gender, status, species, created }) => {
  return (
    <Col md={4} className="mt-3 mb-3">
      <Card>
        <Card.Img variant={"top"} src={image} alt="" />
        <Card.Body>
          <Card.Title>
            {name} - {gender}
          </Card.Title>
          <Card.Text>
            <p>
              {status === "Alive" ? "VIVO" : "MUERTO"} - {species}
            </p>
            <small>{moment(created).format("DD/MM/yyyy")}</small>
          </Card.Text>
          <Button
            type="button"
            variant={status === "Alive" ? "success" : "danger"}
            block
          >
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
