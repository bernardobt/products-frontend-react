import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { BOOKS_URL } from "../constants/apiUrls";
import CustomSpinner from "./CustomSpinner";
import CustomTable from "./CustomTable";

const categoriesHeader = ["#", "title", "subtitle", "author", "rating"];

const Dashboard = () => {
  const [books, setBooks] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(BOOKS_URL);
        setBooks(response.data.data);
        setIsLoading(false);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchBooks();
    console.log(books);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>
          読み込み中
          <CustomSpinner animation="border" variant="primary" />
        </h2>
      ) : (
        <CustomTable tableColumns={categoriesHeader} tableRows={books} />
      )}
    </div>
  );
};

export default Dashboard;
