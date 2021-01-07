import { useState } from "react"; // hook

import { Row, Col, Button } from "react-bootstrap";
// <button type="button" class="btn btn-primary"

// onclick -> evento javascript
// onClick -> evento react (eventos sinteticos)
const Counter = () => {
  // No existen las mutaciones

  // Estado -> Objeto -> brindar información global al componente

  const [counter, setCounter] = useState(0); // const [counter] = useState(0)

  // implicita -> react pasa la referencia del disparador del evento
  const add = () => {
    console.log("suma");
    setCounter(counter + 1);
  };
  const substract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Row>
        <h3>Mi contador bonito 🍎</h3>
      </Row>
      <Row>
        <Col>
          <h4>Contador: {counter}</h4>
          <Button className="mr-2" variant={"primary"} onClick={add}>
            +1
          </Button>

          <Button variant={"primary"} onClick={substract}>
            -1
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Counter;
