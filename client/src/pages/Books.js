import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Dashboard from "../components/Dashboard";

const Books = () => {
  return (
    <Container>
      <h1 className="border-bottom">
        Books Finished{" "}
        <Button className="btn btn-block btn-primary float-end" disabled>
          Suggest a Book
        </Button>
      </h1>

      <Dashboard />
    </Container>
  );
};

export default Books;
