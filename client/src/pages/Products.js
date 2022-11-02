import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Content from "../components/Content";

const Products = () => {
  return (
    <Container>
      <h1 className="border-bottom text-capitalize">
        Products
        <Button
          className="btn btn-block btn-primary float-end"
          size="sm"
          disabled
        >
          Suggestion
        </Button>
      </h1>
      <Content />
    </Container>
  );
};

export default Products;
