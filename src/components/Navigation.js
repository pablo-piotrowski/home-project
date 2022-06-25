import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const pathname = useLocation().pathname;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Simple Animal Gallery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`${pathname === "/" ? "link-active" : null}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/gallery"
                className={`${pathname === "/gallery" ? "link-active" : null}`}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/favourite"
                className={`${
                  pathname === "/favourite" ? "link-active" : null
                }`}
              >
                Favourite
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
