import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { nanoid } from "nanoid/non-secure";

const AddTodo = ({ dispatch }) => {
  const addTask = (e) => {
    e.preventDefault();
    const [description] = e.target;
    const obj = {
      id: nanoid(),
      description: description.value,
      status: false,
    };
    console.log(obj);
    dispatch({ type: "ADD_TODO", payload: { todo: obj } });
    e.target.reset();
  };
  return (
    <Container>
      <Row>
        <Col md={6}>
          <form onSubmit={addTask}>
            <input type="text" placeholder="nueva tarea" />
            <button type="submit">Agregar</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AddTodo);
