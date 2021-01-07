import { useState } from "react";
import { Button } from "react-bootstrap";

const Create = () => {
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
  const [work, setWork] = useState(initialState);
  return (
    <>
      <h3>Crear tarea</h3>
      <input type="text" name="work" value={work.work} onChange={handleWork} />
      <Button variant="primary" block>
        Agregar tarea
      </Button>
    </>
  );
};

export default Create;
