import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

const ProductCard = ({ productObj }) => {
  return (
    <Card>
      <Card.Img
        className="px-5 bg-light"
        variant="top"
        src={productObj.image}
      />
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Title>{productObj.title}</Card.Title>
            <Card.Title>{productObj.subtitle}</Card.Title>
          </ListGroup.Item>
          {productObj.authors.map((author, index) => {
            return (
              <ListGroup.Item key={index}>
                <Card.Text as="div">
                  <div>
                    {author.role}: {author.name}
                  </div>
                </Card.Text>
              </ListGroup.Item>
            );
          })}
          {productObj.companies.map((company, index) => {
            return (
              <ListGroup.Item key={index}>
                <Card.Text as="div">
                  <div>
                    {company.role}: {company.name}
                  </div>
                </Card.Text>
              </ListGroup.Item>
            );
          })}
          <ListGroup.Item>
            <Card.Text as="div"> 現状 : {productObj.status}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text as="div">評価: {productObj.rating}/5</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button disabled size="sm">
              詳報
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
