import { Row, Col, Pagination } from "react-bootstrap";
const Paginate = ({ next, prev, handlePages }) => {
  const handlerNext = () => {
    const [, query] = next.split("?");
    handlePages(query);
  };

  const handlerPrev = () => {
    const [, query] = prev.split("?");
    handlePages(query);
  };
  return (
    <Row>
      <Col>
        <Pagination>
          {/* Evaluo si prev es true para mostrar el elemento previo */}
          {!!prev && <Pagination.Prev onClick={handlerPrev} />}
          <Pagination.Next onClick={handlerNext} />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;
