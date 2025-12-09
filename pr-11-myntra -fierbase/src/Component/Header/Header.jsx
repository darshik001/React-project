import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Offcanvas,
  Modal,
  Button,
} from "react-bootstrap";
import {
  FaRegUser,
  FaRegHeart,
  FaShoppingBag,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";
import Logo from "../../assets/img/Header/myntra-logo.webp";
import offcanvas1 from "../../assets/img/Header/offcanvas-1.webp";
import offcanvas2 from "../../assets/img/Header/offcanvas-2.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { userSingOutAsync } from "../Services/Action/userAction";
function Header() {
  const dispatch = useDispatch();
  const naviget = useNavigate()
  const [profielshow, setprofielShow] = useState(false);

  const profielhandleClose = () => setprofielShow(false);
  const profielhandleShow = () => setprofielShow(true);

  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.userReducer);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShow(false);
      }
    };

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  const handalLogout = () => {
    dispatch(userSingOutAsync());
     naviget('/signin')
  };
  return (
    <>
      <Navbar expand="lg" className="py-3 shadow-sm">
        <Container>
          <button
            className="navbar-toggler border-0 p-0 shadow-none"
            onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Navbar.Brand className="me-auto ms-5" as={Link} to="/">
            <img src={Logo} height="40" alt="Myntra Logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-3">
              <Nav.Link as={Link} to="/men">
                MEN
              </Nav.Link>
              <Nav.Link as={Link} to="/women">
                WOMEN
              </Nav.Link>
              <Nav.Link as={Link} to="/kids">
                KIDS
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/beauty">
                BEAUTY
              </Nav.Link>
            </Nav>

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
                  placeholder="Search for products, brands and more"
                  className="ps-5 header-search"
                  style={{ width: "200px" }}
                />
              </div>
            </Form>

            {user ? (
              <Nav className="me-3">
                <Nav.Link as={Link} to="/addproduct">
                  ADD PRODUCT
                </Nav.Link>
              </Nav>
            ) : (
              ""
            )}
          </Navbar.Collapse>

          <div className="d-flex flex-end align-items-center">
            {user ? (
              <Link to="#" className="text-decoration-none">
                {/* <FaRegUser size={20} /> */}
                <Button
                  variant="white"
                  className="text-decoration-none text-black d-flex flex-column align-items-center d-none d-md-flex"
                  onClick={profielhandleShow}
                >
                  <FaRegUser size={20} />
                  <small>Profile</small>
                </Button>
              </Link>
            ) : (
              <Nav.Link as={Link} to="/signin">
                SignIn
              </Nav.Link>
            )}
            {/* //profiel */}
            {user ? (
              <Modal
    className="profile-modal"
    show={profielshow}
    onHide={profielhandleClose}
    centered
  >
    <Modal.Header className="border-0 pb-0">
      <Modal.Title className="w-100">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-1 fw-bold">{user.displayName || "User"}</h4>
            <p className="text-muted small mb-0">Profile Information</p>
          </div>
          <div className="position-relative">
            <img
              src={user.photoURL || "/default-avatar.png"} // fallback image
              className="profile-avatar rounded-circle border border-4 border-primary shadow"
              alt="Profile"
              width="80"
              height="80"
            />
          </div>
        </div>
      </Modal.Title>
    </Modal.Header>

    <Modal.Body className="pt-4">
      <div className="profile-info-section mb-4">
        <h6 className="text-uppercase text-muted mb-3">Account Details</h6>

        <div className="info-item d-flex justify-content-between align-items-center py-3 border-bottom">
          <div className="d-flex align-items-center">
            <span className="material-icons-outlined text-primary me-3">email</span>
            <div>
              <p className="mb-0 fw-medium">Email Address</p>
              <p className="text-muted small mb-0">Your primary email</p>
            </div>
          </div>
          <span className="fw-medium">{user.email}</span>
        </div>
      </div>

      <div className="logout-section border-top pt-4">
        <Button
          variant="danger"
          className="w-100 d-flex align-items-center justify-content-center py-2"
          onClick={handalLogout}
        >
          <span className="material-icons-outlined me-2">Log Out</span>
        </Button>
        <p className="text-muted small text-center mt-2">
          You will be redirected to the login page
        </p>
      </div>
    </Modal.Body>
  </Modal>
            ) : (
              ""
            )}
            <Link
              to="#"
              className="text-decoration-none text-black d-flex flex-column align-items-center mx-4"
            >
              <FaRegHeart size={20} />
              <small>Wishlist</small>
            </Link>
          </div>
        </Container>
      </Navbar>

      <Offcanvas className="header-offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Body className="p-0 ">
          <div className="w-100 border-5">
            <img src={offcanvas1} alt="" className="w-100" />
          </div>
          <Nav className="flex-column text-black">
            <Nav.Link
              className="d-flex justify-content-between text-black "
              onClick={handleClose}
              as={Link}
              to="/men"
            >
              MEN{" "}
              <span>
                <FaChevronRight />
              </span>
            </Nav.Link>
            <Nav.Link
              className="d-flex justify-content-between text-black "
              onClick={handleClose}
              as={Link}
              to="/women"
            >
              WOMEN{" "}
              <span>
                <FaChevronRight />
              </span>
            </Nav.Link>
            <Nav.Link
              className="d-flex justify-content-between text-black "
              onClick={handleClose}
              as={Link}
              to="/kids"
            >
              KIDS{" "}
              <span>
                <FaChevronRight />
              </span>
            </Nav.Link>
            <Nav.Link
              className="d-flex justify-content-between text-black "
              onClick={handleClose}
              as={Link}
              to="/home"
            >
              HOME{" "}
              <span>
                <FaChevronRight />
              </span>
            </Nav.Link>
            <Nav.Link
              className="d-flex justify-content-between text-black "
              onClick={handleClose}
              as={Link}
              to="/beauty"
            >
              BEAUTY
              <span>
                <FaChevronRight />
              </span>
            </Nav.Link>
          </Nav>
          <hr />
          <Nav className="flex-column text-black">
            <Nav.Link
              className="d-flex justify-content-between text-black "
              onClick={handleClose}
              as={Link}
              to="/addproduct"
            >
              ADD PRODUCT{" "}
              <span>
                <FaChevronRight />
              </span>
            </Nav.Link>
          </Nav>

          <div className="w-100 border-5  offcanvas-img-2 mt-5">
            <img src={offcanvas2} alt="" className="w-100" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
