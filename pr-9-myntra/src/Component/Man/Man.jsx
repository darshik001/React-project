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

    const matchesPrice = Number(p.price) <= Number(filters.price);


    return matchesBrand && matchesDiscount && matchesPrice;
  });

  return (
    <div className="d-flex gap-3">
    <Filters category="men" filters={filters} setFilters={setFilters} />
    <Container>

        <Row className="flex-grow-1">
          {filtered.length > 0 ? (
            filtered.map((product, index) => (
              <Col md={3} className="px-5">
                       <Card 
                   className="shadow-sm border-0 rounded-3 m-2"
                   
                 >
                   {/* Image */}
                   <div style={{ position: "relative" }}>
                     <Card.Img
                       variant="top"
                       src={product.image}
                       style={{ height: "260px", objectFit: "cover" }}
                     />
             
                     {/* Rating Box (Overlay) */}
                     <div
                       style={{
                         position: "absolute",
                         bottom: "10px",
                         left: "10px",
                         background: "white",
                         padding: "3px 8px",
                         borderRadius: "6px",
                         fontSize: "0.8rem",
                         display: "flex",
                         alignItems: "center",
                         gap: "4px",
                         boxShadow: "0 0 5px rgba(0,0,0,0.15)"
                       }}
                     >
                       <span>{product.rates.rating}</span>
                       <AiFillStar size={14} color="green" />
                       <span>|</span>
                       <span>{product.rates.rests}</span>
                     </div>
                   </div>
             
                   <Card.Body>
                     {/* Brand */}
                     <Card.Title className="fw-bold" style={{ fontSize: "1rem" }}>
                       {product.brand}
                     </Card.Title>
             
                     {/* Title */}
                     <Card.Text className="text-muted" style={{ minHeight: "35px" }}>
                       {product.title}
                     </Card.Text>
             
                     {/* Prices */}
                     <div className="mb-2" style={{fontSize:"14px"}}>
                      <small className="fw-bold">
               Rs.{
                 Number(product.price || 0) -
                 (Number(product.price || 0) * Number(product.discount || 0)) / 100
               }
             </small>
             {" "}
                       <small className="text-muted text-decoration-line-through">
                         Rs.{product.price}
                       </small>{" "}
                       <small className="text-danger fw-semibold">({product.discount || 0}% OFF)</small>
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
