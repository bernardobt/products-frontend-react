import ProductCard from "./ProductCard";
import ProductsCardSmall from "./ProductsCardSmall";
import Row from "react-bootstrap/Row";

const ProductsCardList = ({ products, small }) => {
  return (
    <Row xs={1} sm={2} md={small ? 2 : 3} lg={4} className="g-3">
      {products.map((product, index) => {
        return (
          <div key={index}>
            {small ? (
              <ProductsCardSmall productObj={product} />
            ) : (
              <ProductCard productObj={product} />
            )}
          </div>
        );
      })}
    </Row>
  );
};

export default ProductsCardList;
