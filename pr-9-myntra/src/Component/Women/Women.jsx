import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillStar } from "react-icons/ai"; 
import { getallproduct } from '../Services/Action/AddProductAction';

const Women=()=> {
    const {products} = useSelector(state=>state)
    console.log("STATE:", useSelector(state => state));

    const dispatch = useDispatch()
    console.log(products)
    const womenprodcts = products.filter(product=>product.category=== "women")
    useEffect(()=>{
        dispatch(getallproduct())
 },[])
  return (
    <>
<Container>
    <Row>
      {womenprodcts && womenprodcts.length > 0 ? (
        womenprodcts.map((product, index) => (
       <Col md={3}>
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
        <div className="mb-2">
          <span className="fw-bold">₹{product.price}</span>{" "}
          <span className="text-muted text-decoration-line-through">
            ₹{product.oldPrice}
          </span>{" "}
          <span className="text-danger fw-semibold">(10% OFF)</span>
        </div>

       
      </Card.Body>
    </Card>
       </Col>
        ))
      ) : (
        <p>No products available</p>
      )}
    </Row>
</Container>
    </>
  )
}

export default Women