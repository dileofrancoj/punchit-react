import Item from "./Item";

const List = ({ activities, deleteActivity }) => {
  return (
    <>
      {activities.length === 0 && <h4>No hay tareas</h4>}
      {activities.map((item) => (
        <Item key={item.id} {...item} deleteActivity={deleteActivity} />
      ))}
    </>
  );
};

export default List;
