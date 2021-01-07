/*{id : 1, work : '', state : false} */
const Item = ({ id, work, state }) => {
  const deleteWork = (e) => {
    console.log("borrar");
  };
  return (
    <h4 className="text-primary">
      {id} - {work} - {state ? "Cumplido" : "Pendiente"}
    </h4>
  );
};

export default Item;
