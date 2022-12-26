import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import CustomProductsFormInput from "./CustomProductsFormInput";
function ProductsCountCard({ books, games, manga, other }) {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Row xs={1} sm={2} md={4} className="text-center">
          <CustomProductsFormInput title={books} subtitle="小説" />
          <CustomProductsFormInput title={manga} subtitle="漫画" />
          <CustomProductsFormInput title={games} subtitle="ゲーム" />
          <CustomProductsFormInput title={other} subtitle="その他" />
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductsCountCard;
