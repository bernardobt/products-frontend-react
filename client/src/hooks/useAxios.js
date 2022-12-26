import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/apiUrls";

axios.defaults.baseURL = BASE_URL;

export const useAxios = (axiosParams) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { data, error, loading };
};
