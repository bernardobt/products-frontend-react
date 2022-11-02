import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const testCategoriesObjects = [
  {
    _id: {
      $oid: "635f14dcc9bbd71ae973abc7",
    },
    name: "book",
    createdAt: {
      $date: {
        $numberLong: "1667175369230",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6362c0756285631b76fe2c85",
    },
    name: "manga",
    createdAt: {
      $date: {
        $numberLong: "1667175369230",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6362c0886285631b76fe2c86",
    },
    name: "game",
    createdAt: {
      $date: {
        $numberLong: "1667175369230",
      },
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "635f22acb77a27bed7368704",
    },
    name: "test",
    createdAt: {
      $date: {
        $numberLong: "1667179134279",
      },
    },
    __v: 0,
  },
];

function TopBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Jose</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
