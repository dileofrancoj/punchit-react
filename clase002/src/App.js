import { Container } from "react-bootstrap";
import Header from "./Components/Header"; /* index default */
import Counter from "./Components/Counter"; /* index default */
import Register from "./Components/Register";
function App() {
  return (
    <Container>
      {/* React developer tools */}
      {/* props: Forma que tiene la libreria de pasar elementos a un componente child */}
      <Header title="Titulo de prueba 🔥" likes={4} />
      <Counter />
      <Register newProp="ejemplo" />
    </Container>
  );
}

export default App;
