import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { BOOKS_URL } from "../constants/apiUrls";
import CustomSpinner from "./CustomSpinner";
import CustomTable from "./CustomTable";

const categoriesHeader = ["title", "subtitle", "category", "rating", "status"];

const testProductObject = [
  {
    _id: {
      $oid: "6362ac7b6285631b76fe2c79",
    },
    title: "Book Name 1",
    subtitle: "Book subtitle",
    authors: [
      {
        name: "author 1",
        role: "story",
      },
      {
        name: "author 2",
        role: "art",
      },
    ],
    companies: [
      {
        name: "company 1",
        role: "publishing",
      },
    ],
    category: "Book",
    status: "Finished",
    genres: ["genre 1", "genre 2"],
    rating: 5,
    image: "https://via.placeholder.com/100x150",
    createdAt: {
      $date: {
        $numberLong: "1667087132816",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6362ac7b6285631b76fe2c78",
    },
    title: "Game Title",
    subtitle: "Game Subtitle",
    authors: [
      {
        name: "author 3",
        role: "story",
      },
      {
        name: "author 4",
        role: "art",
      },
    ],
    companies: [
      {
        name: "company 3",
        role: "dev",
      },
      {
        name: "company 4",
        role: "publishing",
      },
    ],
    category: "Game",
    status: "Ongoing",
    genres: ["genre 3", "genre 4"],
    rating: 4,
    image: "https://via.placeholder.com/100x150",
    createdAt: {
      $date: {
        $numberLong: "1667087132816",
      },
    },
    __v: 0,
  },
];

const Content = () => {
  const [books, setBooks] = useState(testProductObject);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get(BOOKS_URL);
  //       setBooks(response.data.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else {
  //         console.log(`Error: ${error.message}`);
  //       }
  //     }
  //   };
  //   fetchBooks();
  //   console.log(books);
  // }, []);

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

export default Content;
