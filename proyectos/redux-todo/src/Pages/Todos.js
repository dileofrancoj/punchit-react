import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { actions } from "./../redux/actions/todo";
const Todos = ({ dispatch, todo: { todos } }) => {
  const deleteActivity = (id) => {
    dispatch({ type: actions.DELETE_TODO, payload: { id } });
  };
  return (
    <Container>
      <Row>
        <Col>
          <h3>Todo's list</h3>
          {todos.length ? (
            todos.map(({ id, description }) => (
              <div key={id}>
                <li>{description}</li>
                <button type="button" onClick={() => deleteActivity(id)}>
                  Eliminar
                </button>
              </div>
            ))
          ) : (
            <h4>No hay tareas</h4>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Todos);
