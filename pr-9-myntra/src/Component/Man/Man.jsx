import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { getallproduct } from "../Services/Action/AddProductAction";
import Filters from "../Filters/Filters";
import { useNavigate } from "react-router-dom";
import { BsSliders } from "react-icons/bs";
import { BiSort } from "react-icons/bi";

const Man = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getallproduct());
  }, [dispatch]);

  const manProducts = products.filter(
    (p) => (p.category || "").toLowerCase() === "men"
  );

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    discount: null,
    price: 10000,
  });

  const [sortType, setSortType] = useState("");

  const filtered = manProducts.filter((p) => {
    const productSub = String(p.subcategory || "").toLowerCase();
    const matchesCategory =
      filters.category.length === 0 ||
      filters.category.map((c) => c.toLowerCase()).includes(productSub);

    const matchesBrand =
      filters.brand.length === 0 || filters.brand.includes(p.brand);

    const prodDiscount = Number(p.discount || 0);
    const matchesDiscount =
      filters.discount == null ? true : prodDiscount >= filters.discount;

    const prodPrice = Number(p.price || 0);
    const matchesPrice = prodPrice <= filters.price;

    return (
      matchesCategory &&
      matchesBrand &&
      matchesDiscount &&
      matchesPrice
    );
  });

  const sortProducts = (arr) => {
    let sorted = [...arr];
    switch (sortType) {
      case "high":
        return sorted.sort((a, b) => Number(b.price) - Number(a.price));
      case "low":
        return sorted.sort((a, b) => Number(a.price) - Number(b.price));
      case "a":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "z":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  };

  const display = sortProducts(filtered);

  const handleView = (id) => {
    navigate(`/product-info/${id}`);
  };


  const [hoverIndex, setHoverIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);


  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <Row className="m-0 mt-3">
        {/* LEFT FILTER */}
        <Col md={4} lg={3} xl={2} className="ps-0">
          <div className="d-none d-md-block">
            <Filters category="men" filters={filters} setFilters={setFilters} />
          </div>
        </Col>

        {/* PRODUCT GRID */}
        <Col md={8} lg={9} xl={10}>
          <div className="position-relative">
            <Row className="justify-content-end">
              <Col sm={3} className="text-end mb-3 d-none d-md-block">
                <Form.Select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="">Recommended</option>
                  <option value="high">Price: High to Low</option>
                  <option value="low">Price: Low to High</option>
                  <option value="a">Title: A - Z</option>
                  <option value="z">Title: Z - A</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-5">
              {display.length > 0 ? (
                display.map((product, index) => (
                  <Col
                    xs={6}
                    lg={4}
                    xl={3}
                    key={product.id}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => {
                      setHoverIndex(index);
                      setSlideIndex(0);
                    }}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <Card
                      className="shadow-sm border-0 rounded-3 m-2"
                      onClick={() => handleView(product.id)}
                    >
                      {hoverIndex !== index && (
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={product.image[0]}
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                          <div
                            className="d-flex align-items-center gap-1 position-absolute bottom-0 start-0 translate-middle-y bg-white p-1 px-2 ms-2 rounded"
                            style={{ fontSize: "0.8rem" }}
                          >
                            <span>{product.rates?.rating || "-"}</span>
                            <AiFillStar size={14} color="green" />
                            <span>|</span>
                            <span>{product.rates?.rests || "-"}</span>
                          </div>
                        </div>
                      )}

                      {hoverIndex === index && (
                        <div>
                          <Carousel
                            activeIndex={slideIndex}
                            onSelect={(i) => setSlideIndex(i)}
                            controls={false}
                            indicators={false}
                            interval={1500}
                          >
                            {product.image.map((img, i) => (
                              <Carousel.Item key={i}>
                                <img
                                  src={img}
                                  className="d-block w-100 position-relative "
                                  style={{
                                    height: "300px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                  }}
                                />
                              </Carousel.Item>
                            ))}
                          <div className="position-absolute bottom-0 end-0  text-bg-dark">1234</div>
                          </Carousel>


                          <div className="d-flex justify-content-center mt-1 gap-2">
                            {product.image.map((_, i) => (
                              <div
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSlideIndex(i);
                                }}
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor:
                                    slideIndex === i ? "black" : "#ccc",
                                  cursor: "pointer",
                                }}
                              ></div>
                            ))}
                          </div>

                        </div>
                      )}

                      <Card.Body>
                        <Card.Title className="fw-bold">
                          {product.brand}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          {product.title}
                        </Card.Text>

                        <div className="mb-2">
                          <small className="fw-bold">
                            Rs.
                            {Number(product.price) -
                              (Number(product.price) *
                                Number(product.discount || 0)) /
                                100}
                          </small>{" "}
                          <small className="text-muted text-decoration-line-through">
                            Rs.{product.price}
                          </small>{" "}
                          <small className="text-danger fw-semibold">
                            ({product.discount || 0}% OFF)
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <h2 className="p-4 text-center">Product Not Found</h2>
              )}
            </Row>

            <Row
              className="d-md-none position-fixed bottom-0 start-50 translate-middle-x w-100 bg-white py-2 shadow-lg justify-content-center"
              style={{ zIndex: 999 }}
            >
              <Col xs={6} className="text-center">
                <Button
                  variant="white"
                  className="px-4 fw-semibold"
                  onClick={() => setShow2(true)}
                >
                  <BiSort className="me-2" />
                  Sort
                </Button>
              </Col>
              <Col xs={6} className="text-center">
                <Button
                  variant="white"
                  className="px-4 fw-semibold"
                  onClick={() => setShow(true)}
                >
                  <BsSliders className="me-2" />
                  Filter
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className="d-md-none w-100 h-100"
        placement="bottom"
      >
        <Offcanvas.Body className="p-0">
          <Filters category="men" filters={filters} setFilters={setFilters} />
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={show2}
        onHide={() => setShow2(false)}
        className="d-md-none w-100 h-50"
        placement="bottom"
      >
        <Offcanvas.Body>
          <Form.Check
            value=""
            type="radio"
            name="sort"
            label="Recommended"
            onChange={(e) => setSortType(e.target.value)}
          />
          <Form.Check
            value="high"
            type="radio"
            name="sort"
            label="Price: High to Low"
            onChange={(e) => setSortType(e.target.value)}
          />
          <Form.Check
            value="low"
            type="radio"
            name="sort"
            label="Price: Low to High"
            onChange={(e) => setSortType(e.target.value)}
          />
          <Form.Check
            value="a"
            type="radio"
            name="sort"
            label="Title: A - Z"
            onChange={(e) => setSortType(e.target.value)}
          />
          <Form.Check
            value="z"
            type="radio"
            name="sort"
            label="Title: Z - A"
            onChange={(e) => setSortType(e.target.value)}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Man;
