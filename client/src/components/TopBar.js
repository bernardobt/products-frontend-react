import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/books">Books</NavDropdown.Item>
              <NavDropdown.Item href="/comics" disabled>
                Comics
              </NavDropdown.Item>
              <NavDropdown.Item href="/games" disabled>
                Games
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
