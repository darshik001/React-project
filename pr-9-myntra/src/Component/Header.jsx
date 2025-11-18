import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import { FaRegUser , FaRegHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import Logo from '../assets/myntra-logo.webp'

function Header() {
  return (
    <>
     <Navbar  expand="lg" className="py-3 shadow-sm">
      <Container >

        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src={Logo}
            height="40"
            alt="Myntra Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          {/* Menu Items */}
          <Nav className=" mx-auto">
            <Nav.Link href="#">MEN</Nav.Link>
            <Nav.Link href="#">WOMEN</Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
           
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex align-items-center me-4">

  <div style={{ position: "relative" }}>
    <FaSearch
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        color: "gray",
      }}
    />

    <FormControl
      type="search"
      placeholder="Search for products, brands and more"
      className="ps-5"      // padding-left for icon
      style={{ width: "400px" }}
    />
  </div>

</Form>
        </Navbar.Collapse>

          {/* Right Side Icons */}
          <Nav className="">
            <Nav.Link href="#" className="d-flex flex-column align-items-center ">
              <FaRegUser  size={20} />
              <small>Profile</small>
            </Nav.Link>

            <Nav.Link href="#" className="d-flex flex-column align-items-center mx-4">
              <FaRegHeart  size={20} />
              <small>Wishlist</small>
            </Nav.Link>

            <Nav.Link href="#" className="d-flex flex-column align-items-center">
              <FaShoppingBag size={20} />
              <small >Bag</small>
            </Nav.Link>
          </Nav>

      </Container>
    </Navbar>
    </>
  )
}

export default Header