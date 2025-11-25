import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getallproduct } from '../../Services/Action/AddProductAction'
import { AiFillStar } from "react-icons/ai";

const Allproducts = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state)
  useEffect(() => {
    dispatch(getallproduct())
  }, [])
  return (
    <>
      <Container>
        <Row>

          {products && products.length > 0 ? (
            products.map((product, index) => (
              <Col md={3} key={product.id}>
                <Card className="shadow-sm border-0 rounded-3 m-2">
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ height: "260px", objectFit: "cover" }}
                    />

                    <div className="d-flex  align-items-center gap-1  position-absolute bottom-0 start-0 translate-middle-y   bg-white p-1 px-2 ms-2 rounded" style={{ fontSize: "0.8rem" }}>
                      <span>{product.rates.rating}</span>
                      <AiFillStar size={14} color="green" />
                      <span>|</span>
                      <span>{product.rates.rests}</span>
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold" style={{ fontSize: "1rem" }}>
                      {product.brand}
                    </Card.Title>

                    <Card.Text className="text-muted" style={{ minHeight: "35px" }}>
                      {product.title}
                    </Card.Text>

                    <div className="mb-2" style={{ fontSize: "14px" }}>
                      <small className="fw-bold">
                        Rs.{
                          Number(product.price || 0) -
                          (Number(product.price || 0) * Number(product.discount || 0)) / 100
                        }
                      </small>

                      <small className="text-muted text-decoration-line-through">
                        Rs.{product.price}
                      </small>
                      <small className="text-danger fw-semibold">({product.discount || 0}% OFF)</small>
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

export default Allproducts