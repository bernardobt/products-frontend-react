import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const ProductsCardSmall = ({ productObj }) => {
  return (
    <div className="border rounded-2 p-1" style={{ height: "7rem" }}>
      <Row>
        <Col className="p-0 ps-3">
          <Image
            src={productObj.image}
            alt="cover"
            rounded
            style={{ width: "4rem" }}
          />
        </Col>
        <Col>
          <p>{productObj.title}</p>
        </Col>
        <Col md="auto">{productObj.status}</Col>
      </Row>
    </div>
  );
};

export default ProductsCardSmall;
