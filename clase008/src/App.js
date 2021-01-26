import Routes from "./Routes/";
import { AuthProvider } from "./context/Auth";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
