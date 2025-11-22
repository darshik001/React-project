import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { getallproduct } from "../Services/Action/AddProductAction";
import Filters from "../Filters/Filters";

const Man = () => {
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();
  const manProducts = products.filter((p) => p.category === "men");

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    discount: null,
    price: 10000,
  });

  useEffect(() => {
    dispatch(getallproduct());
  }, []);

  // APPLY FILTERS
  const filtered = manProducts.filter((p) => {
    const matchesBrand =
      filters.brand.length === 0 || filters.brand.includes(p.brand);

    const matchesDiscount =
      !filters.discount ||
      p.discount >= filters.discount;

    const matchesPrice = p.price <= filters.price;

    return matchesBrand && matchesDiscount && matchesPrice;
  });

  return (
    <div className="d-flex gap-3">
    <Filters category="men" filters={filters} setFilters={setFilters} />
    <Container>

        <Row className="flex-grow-1">
          {filtered.length > 0 ? (
            filtered.map((product, index) => (
              <Col md={3} key={index}>
                <Card className="shadow-sm border-0 rounded-3 m-2">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "260px", objectFit: "cover" }}
                  />

                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {product.brand}
                    </Card.Title>

                    <Card.Text className="text-muted">
                      {product.title}
                    </Card.Text>

                    <div className="mb-2">
                      <span className="fw-bold">₹{product.price}</span>{" "}
                      <span className="text-danger fw-semibold">
                        ({product.discount}% OFF)
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No matching products</p>
          )}
        </Row>
    </Container>
      </div>
  );
};

export default Man;
