import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
    const {products} = useSelector((state)=>state)
    const {id} = useParams()
    const product = products.find((product)=> product.id == id)
  if (!product) return <p className="p-5">Product Not Found</p>;

 

  return (
    <Container className="py-4">
      <Row>
        {/* ---------------- LEFT SIDE IMAGES ---------------- */}
        <Col md={6}>
          <Row>
            {product.image.map((img, index) => (
              <Col md={12} key={index} className="mb-3">
                <Card className="shadow-sm border-0">
                  <Card.Img
                    src={img}
                    style={{
                      height: "500px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* ---------------- RIGHT SIDE DETAILS ---------------- */}
        <Col md={6}>
          {/* BRAND */}
          <h3 className="fw-bold">{product.brand}</h3>

          {/* TITLE */}
          <h5 className="text-muted">{product.title}</h5>

          {/* PRICE */}
          <div className="mt-3 mb-4">
            <h4 className="fw-bold text-dark">₹ {100}</h4>
            <div>
              <span className="text-decoration-line-through text-muted">
                MRP ₹{product.price}
              </span>
              <span className="text-danger fw-semibold ms-2">
                ({product.discount}% OFF)
              </span>
            </div>
            <small className="text-success">inclusive of all taxes</small>
          </div>

          {/* SIZE SELECTOR */}
          <h6 className="fw-bold mt-4">SELECT SIZE</h6>
          <div className="d-flex gap-2 flex-wrap mb-4">
            {["S", "M", "L", "XL"].map((s) => (
              <Button
                key={s}
                variant="outline-dark"
                className="rounded-circle"
                style={{ width: 50, height: 50 }}
              >
                {s}
              </Button>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-3 mb-4">
            <Button
              variant="danger"
              className="px-4 py-2 d-flex align-items-center fw-bold"
            >
              ADD TO BAG
            </Button>

            <Button
              variant="outline-dark"
              className="px-4 py-2 d-flex align-items-center fw-bold"
            >
              <AiOutlineHeart size={20} className="me-2" />
              WISHLIST
            </Button>
          </div>

          {/* DELIVERY OPTIONS */}
          <div className="mt-4">
            <h6 className="fw-bold">
              DELIVERY OPTIONS <FiTruck className="ms-2" />
            </h6>

            <Form className="mt-2">
              <div className="d-flex gap-2">
                <Form.Control placeholder="Enter pincode" />
                <Button variant="dark">CHECK</Button>
              </div>
            </Form>

            <small className="text-muted">
              Please enter PIN to check delivery time & Pay on Delivery
              availability.
            </small>
          </div>

          <hr className="my-4" />

          {/* EXTRA DETAILS */}
          <div>
            <h6 className="fw-bold">100% ORIGINAL PRODUCTS</h6>
            <p className="text-muted">
              Fast delivery options available depending on your pincode.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProduct;
