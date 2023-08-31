import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getAllProducts } from "../../ApiCalls/apis";
import "./style.scss";

function Productcard() {
  const [topProducts, setTopProducts] = useState([]);
  // useEffect(() => {
  //   getProduct();
  // }, []);

  // const getProduct = async () => {
  //   const res = await getAllProducts();
  //   const slicedData = res?.data?.result.slice(-8);
  //   setTopProducts(slicedData);
  // };

  return (
    <section className="product_wrapper">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading_wrapper">
              <h2>Top Products</h2>
            </div>
          </Col>

          {topProducts.map((item) => (
            <Col lg={3}>
              <Link to={`/products/${item.category}`}>
                <Card className="card_wrapper">
                  <Card.Body className="card_imgContainer">
                    <Card.Img src={item.productImageUrl}></Card.Img>
                    <Card.Title className="mt-3 card_title">
                      {item.productName}
                    </Card.Title>
                    <p>{item.description}</p>
                    <p>₹{item.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Productcard;
