import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useReducer, useContext } from "react";
import { userReducer, initialState } from "./../reducers/user";
import { SET_USER } from "./../reducers/actions/user";
import { AuthContext } from "./../context/Auth";
import { useHistory } from "react-router-dom";
import Seo from "./../Components/Seo";
const Login = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(userReducer, initialState); // [state,function]
  console.log(history);
  const { authenticate } = useContext(AuthContext);
  console.log(authenticate);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const [user, password] = e.target;
    dispatch({
      type: SET_USER,
      payload: { user: user.value, password: password.value },
    });
    const serverReponse = "myToken";
    authenticate(serverReponse);
    console.log("hi");
    history.push("/dashboard");
  };

  return (
    <>
      <Seo title="Login" description="El login del sitio" />
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handlerSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="usuario"
                  name="usuario"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="****"
                  name="password"
                />
              </Form.Group>
              <Button type="submit">Logueate :D</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
