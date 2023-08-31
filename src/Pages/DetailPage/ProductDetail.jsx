import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const ProductDetail = ({ product_detail }) => {
  const navigate = useNavigate();
  const addToCart = () => {
    navigate("/cart");
  };
  return (
    <Container className="detail_wrapper">
      <Row className="product_row">
        <Col lg={6}>
          <img src={product_detail?.productImage} />
        </Col>
        <Col lg={6}>
          <div className="product_name">
            <h4>{product_detail.title}</h4>
            <p>{product_detail.category}</p>
          </div>
          <hr />
          <div className="price_div">
            <ul>
              <li>
                <p>₹{product_detail.price}</p>
              </li>
            </ul>
            <ul>
              <li>
                <button onClick={addToCart}>Add to Cart</button>
              </li>
              <li>
                <button>Buy Now</button>
              </li>
            </ul>
          </div>
          <hr />
          <div className="detail_wrapper">
            <ul>
              <li>{product_detail.description}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
