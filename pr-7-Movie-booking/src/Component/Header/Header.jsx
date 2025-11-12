import { Navbar, Nav, Container, Form, Button, FormControl } from "react-bootstrap";
import { FaFilm, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const Header=()=> {
  return (
   <>
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-uppercase d-flex align-items-center">
          <FaFilm className="me-2 text-warning fs-4" />
          Movie<span className="text-warning">Booking</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="movie-navbar-nav" />
        <Navbar.Collapse id="movie-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} to="/bollywood" className="fw-semibold">Bollywood</Nav.Link>
            <Nav.Link as={Link} to="/hollywood" className="fw-semibold">Hollywood</Nav.Link>
            <Nav.Link as={Link} to="/addmovie" className="fw-semibold">Add Movie</Nav.Link>
          </Nav>

          

          <Nav>
            <Nav.Link href="/profile">
              <FaUserCircle className="fs-4 text-warning" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header