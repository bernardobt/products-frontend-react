import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
