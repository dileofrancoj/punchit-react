import { useContext } from "react";
import { AuthContext } from "./../context/Auth";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <h3>Token: {auth} </h3>
    </>
  );
};

export default Dashboard;
