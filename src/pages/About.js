import Container from "react-bootstrap/esm/Container";

import { useContext } from "react";

import { USERS_URL } from "../constants/apiUrls";
import { useAxios } from "../hooks/useAxios";

import Loading from "../components/Loading";
import ProductsCountCard from "../components/ProductsCountCard";
import CategoriesContext from "../context/CategoriesContext";
import ProductsCardList from "../components/ProductsCardList";

const testUserId = "6362dc456285631b76fe2c99";

const Test = () => {
  const { data, error, loading } = useAxios({
    url: `${USERS_URL}/${testUserId}/info`,
    method: "GET",
    headers: {
      accept: "/*",
    },
  });

  const catContext = useContext(CategoriesContext);

  function filter(arr, criteria) {
    return arr.filter(function (obj) {
      return Object.keys(criteria).every(function (c) {
        return obj[c] === criteria[c];
      });
    });
  }

  return (
    <Container>
      {error ? (
        <div>
          <h1>Error: {error?.message}</h1>
        </div>
      ) : loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <h1 className="mt-3">{data.data.username}</h1>
          <div className="mt-3 p-2 border rounded">{data.data.description}</div>
          <ProductsCountCard
            manga={filter(data.data.products, { category: "漫画" }).length}
            books={filter(data.data.products, { category: "小説" }).length}
            games={filter(data.data.products, { category: "ゲーム" }).length}
            other={filter(data.data.products, { category: "その他" }).length}
          />
          {catContext.error ? (
            <div>
              <h1>Error: {catContext.error?.message}</h1>
            </div>
          ) : catContext.loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <div className="border rounded mt-3 p-2">
              <h3>商品</h3>
              <ProductsCardList products={data.data.products} small={true} />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Test;
