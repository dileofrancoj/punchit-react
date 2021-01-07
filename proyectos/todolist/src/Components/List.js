import Item from "./Item";

const items = [
  { id: 1, work: "Aprende react con fran ?", state: false },
  { id: 2, work: "Alimentar a obi wan", state: true },
  { id: 3, work: "Comprar google (LPM)", state: false },
];

const List = () => {
  return (
    <>
      {/* item : {id : 1, work : '', state : false} */}
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
};
/*{id : 1, work : '', state : false} */

export default List;
