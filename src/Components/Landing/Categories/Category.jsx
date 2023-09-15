import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const Categories = ({ product_category }) => {
  console.log("category", product_category);
  return (
    <section className="categories_wrapper">
      <Container>
        <Row className="g-0">
          {product_category?.map((item) => (
            <Col sm={2}>
              <Link to={`/categoryProducts/${item?.id}`} key={item?.id}>
                <div className="img-container">
                  <img
                    draggable="false"
                    src={item?.categoryImage}
                    alt={item?.categoryName}
                  />
                  <span>{item?.categoryName}</span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default Categories;
