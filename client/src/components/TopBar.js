import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">序是</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/profile"> プロフィール </Nav.Link>
            <Nav.Link href="/catalog"> カタログ </Nav.Link>
            <Nav.Link href="/products">一覧表</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
