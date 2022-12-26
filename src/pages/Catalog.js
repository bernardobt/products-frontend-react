import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Loading from "../components/Loading";
import ProductCategory from "../components/ProductCategory";
import CategoriesContext from "../context/CategoriesContext";
import ProductsContext from "../context/ProductsContext";

const Catalog = () => {
  const catContext = useContext(CategoriesContext);
  const prodContext = useContext(ProductsContext);
  return (
    <Container>
      {catContext.error || prodContext.error ? (
        <div>
          <h1>Error: {catContext.error?.message}</h1>
          <h1>Error: {prodContext.error?.message}</h1>
        </div>
      ) : catContext.loading || prodContext.loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <ProductCategory
          categories={catContext.data.data}
          products={prodContext.data.data}
        />
      )}
    </Container>
  );
};

export default Catalog;
