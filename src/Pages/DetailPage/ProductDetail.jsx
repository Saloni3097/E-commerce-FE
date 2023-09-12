import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Components/ApiCalls/apis";
import "./style.scss";

const ProductDetail = (props) => {
  const navigate = useNavigate();
  const addCart = async () => {
    const cartData = {
      productName: props?.product_detail[0]?.productName,
    };
    try {
      const response = await addToCart(cartData);

      console.log("Name", props?.product_detail[0]?.productName);
      console.log("Cart added successfully", response);
    } catch (error) {
      console.error(error);
    }
    // navigate("/cart");
  };
  // console.log("data>>>>>", props.product_detail[0]);
  // console.log("Props", props);

  // console.log("<<<<<<<<<<<<<<<<", Object.entries(props.product_detail[0]));
  // console.log("props.product_detail<<<<<<", props.product_detail);
  //  const valueToshow = ["inStock", "views"];
  // console.log("ValueToshow<<<<<<", valueToshow);
  // return props?.product_detail[0]
  //   ? Object.entries(props?.product_detail[0]).map(([key, value]) => {
  //       // debugger;
  //       if (valueToshow.includes(key)) {
  //         <h4>{key}</h4>;
  //         console.log(key, ":", value);
  //       }
  return (
    <>
      <Container className="detail_wrapper">
        <Row className="product_row">
          <Col lg={6}>
            <img
              src={props?.product_detail[0]?.productImage}
              alt={props?.product_detail[0]?.productName}
            />
          </Col>
          <Col lg={6}>
            <div className="product_name">
              <h4>{props?.product_detail[0]?.productName}</h4>
              <p>{props?.product_detail[0]?.categoryId}</p>
            </div>
            <hr />
            <div className="price_div">
              <ul>
                <li>
                  <p>₹{props?.product_detail[0]?.price}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <button onClick={addCart}>Add to Cart</button>
                </li>
                <li>
                  <button>Buy Now</button>
                </li>
              </ul>
            </div>
            <hr />
            <div className="detail_wrapper">
              <ul>
                <li>{props?.product_detail[0]?.description}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
  //   })
  // : "";
};

export default ProductDetail;
