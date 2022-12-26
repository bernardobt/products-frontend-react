import { createContext, useState } from "react";

import { CATEGORIES_URL } from "../constants/apiUrls";
import { useAxios } from "../hooks/useAxios";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const { data, error, loading } = useAxios({
    url: CATEGORIES_URL,
    method: "GET",
    headers: {
      accept: "/*",
    },
  });
  return (
    <CategoriesContext.Provider value={{ data, error, loading }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContext;
