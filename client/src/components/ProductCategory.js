import ProductsCardList from "./ProductsCardList";
import Alert from "react-bootstrap/Alert";

const ProductCategory = ({ categories, products }) => {
  function filter(arr, criteria) {
    return arr.filter(function (obj) {
      return Object.keys(criteria).every(function (c) {
        return obj[c] === criteria[c];
      });
    });
  }

  return (
    <>
      {categories.map((cat, index) => {
        const prod = filter(products, { category: cat.name });
        return (
          <div key={index}>
            <h2 className="text-center text-primary p-1 my-3 rounded-2 border border-primary">
              {cat.name} ({prod.length})
            </h2>
            {prod.length ? (
              <ProductsCardList products={prod} small={false} />
            ) : (
              <Alert variant="warning" className="text-center">
                「{cat.name}」の中で商品はありません。
              </Alert>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ProductCategory;
