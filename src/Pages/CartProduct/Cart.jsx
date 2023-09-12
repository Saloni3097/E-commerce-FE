import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.scss";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const Cart = ({ cart_data }) => {
  console.log("jsondata", cart_data);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const [addToCarts, setToCarts] = useState();
  useEffect(() => {
    setToCarts(cart_data?.data);
  }, [cart_data]);
  return (
    <>
      <section className="cart_wrapper">
        <Container>
          <Col>
            <div className="cart_product">
              <h6>E-Commerce</h6>
            </div>
          </Col>
          {cart_data?.data?.map((item) => (
            <Row>
              <Col lg={8}>
                {/* <div className="cart_product">
                  <h6>E-Commerce</h6>
                </div> */}
                <div className="cart_product">
                  <Row>
                    {/* <h6>cart section</h6> */}
                    <Col lg={3}>
                      <img src={item?.productImage} />
                    </Col>
                    <Col lg={6}>
                      <p>{item.id}</p>
                      <p>{item.userId}</p>
                      <p>{item.date}</p>
                      <button>REMOVE</button>
                    </Col>
                    <Col lg={3}>
                      <Button className="button_placeOrder">PLACE ORDER</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3}>
                      <div className="counterBox">
                        <div>
                          {" "}
                          <button className="dec_button" onClick={decrement}>
                            <AiOutlineMinusCircle />
                          </button>
                        </div>
                        <div>{count}</div>
                        <div>
                          {" "}
                          <button className="inc_button" onClick={increment}>
                            <AiOutlinePlusCircle />
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="cart_calc">
                  <h6>Price Detail </h6>
                  <hr />
                  <Row>
                    <Col lg={6}>
                      <p>Price ({item?.itemQuantity})</p>
                      <p>Discount</p>
                      <p>Delivery Charges</p>
                    </Col>
                    <Col lg={6}>
                      <p>{item?.calcAmount}</p>
                      <p>{item?.discount}</p>
                      <p>Free</p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg={6}>
                      <p>Total Amount</p>
                    </Col>
                    <Col lg={6}>
                      <p>{item?.totalAmount}</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Cart;
