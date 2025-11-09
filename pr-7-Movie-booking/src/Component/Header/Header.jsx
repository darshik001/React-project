import { Navbar, Nav, Container, Form, Button, FormControl } from "react-bootstrap";
import { FaFilm, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const Header=()=> {
  return (
   <>
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="/" className="fw-bold text-uppercase d-flex align-items-center">
          <FaFilm className="me-2 text-warning fs-4" />
          Movie<span className="text-warning">Booking</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="movie-navbar-nav" />
        <Navbar.Collapse id="movie-navbar-nav">
          {/* Center Nav Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="fw-semibold">Movies</Nav.Link>
            <Nav.Link as={Link} to="/bookings" className="fw-semibold">My Bookings</Nav.Link>
            <Nav.Link as={Link} to="/addmovie" className="fw-semibold">Add Movie</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search movies..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>

          {/* Profile Icon */}
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