import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const Products = (props) => {
  return (
    <section className="mt-5">
      <Container className="prod_container">
        {props.cate_data.map((item) => (
          <Link to={`/productDetail`}>
            <Row>
              <Col lg={3}>
                <Card className="mb-3">
                  <Card.Body className="cardimg">
                    <Card.Img src={item.productImage} />
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <p>{item.productName}</p>
                <p>{item.description}</p>
              </Col>
              <Col lg={3}>
                <p style={{ textAlign: "center" }}>₹{item.price}</p>
              </Col>
              <hr />
            </Row>
          </Link>
        ))}
      </Container>
    </section>
  );
};

export default Products;
