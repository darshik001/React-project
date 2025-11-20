import { useSelector } from 'react-redux'
import { getproductData } from '../Services/Storage/StorageData'
import Coupon from './coupon-code/Coupon'
import Shop from './Shop/Shop'
import Slider1 from './Sliders/Slider-1'
import Slider2 from './Sliders/Slider-2'
import Slider3 from './Sliders/Slider-3'
import Slider4 from './Sliders/Slider-4'
import Slider5 from './Sliders/Slider-5'
import { Card, Badge, Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai"; // react-icons
const Home=()=> {

    const products = getproductData()

  // let products = getproductData()
  console.log(products)
  return (
    <>
    <Coupon/>
    <Slider1/>
    <Slider2/>
    <Slider3/>
    <Slider4/>
    <Slider5/>
    <Shop/>
    


      
        
         <div className="d-flex flex-wrap justify-content-center">
      {products && products.length > 0 ? (
        products.map((product, index) => (
          <Card 
      className="shadow-sm border-0 rounded-3 m-2"
      style={{ width: "18rem", position: "relative" }}
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
          <span>{product.rating}</span>
          <AiFillStar size={14} color="green" />
          <span>|</span>
          <span>{product.reviewCount}</span>
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
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
        
      
    </>
  )
}

export default Home