import React, { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../constants/apiUrls";
import { useAxios } from "../hooks/useAxios";
import CustomTable from "./CustomTable";
import Loading from "./Loading";

const categoriesHeader = ["title", "subtitle", "category", "status"];

const Content = () => {
  const { data, error, loading } = useAxios({
    url: PRODUCTS_URL,
    method: "GET",
    headers: {
      accept: "/*",
    },
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <h1>{error?.code}</h1>
          <h1>{error?.message}</h1>
        </>
      ) : (
        <>
          <CustomTable tableColumns={categoriesHeader} tableRows={data.data} />
        </>
      )}
    </div>
  );
};

export default Content;
