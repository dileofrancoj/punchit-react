import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";
const Create = ({ addActivity }) => {
  const initialState = {
    id: "",
    work: "",
    state: false,
  };
  const handleWork = (e) => {
    const { name, value } = e.target;
    setWork({
      ...work,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { work: task } = work;
    if (task.trim() === "") return;
    const workObject = {
      ...work, // {id : "", work:"tarea", state:false}
      id: shortid(),
    };
    console.log(workObject);
    setWork(initialState);
    addActivity(workObject);
  };
  const [work, setWork] = useState(initialState);
  return (
    <>
      <h4>Crear tarea</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="work"
            value={work.work}
            onChange={handleWork}
            placeholder="ingresa la tarea"
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Agregar tarea
        </Button>
      </Form>
    </>
  );
};

export default Create;
