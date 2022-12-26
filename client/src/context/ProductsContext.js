import { createContext, useState } from "react";

import { PRODUCTS_URL } from "../constants/apiUrls";
import { useAxios } from "../hooks/useAxios";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { data, error, loading } = useAxios({
    url: PRODUCTS_URL,
    method: "GET",
    headers: {
      accept: "/*",
    },
  });
  return (
    <ProductsContext.Provider value={{ data, error, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
