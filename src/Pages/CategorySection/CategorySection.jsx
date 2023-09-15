import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const CategorySection = (props) => {
  return (
    <>
      <Container className="category_section">
        <Row>
          {props?.category_data.map((item, key) => (
            <Col lg={3}>
              <Link to={`/productDetail/${item?.id}`}>
                <Card className="mb-3">
                  <Card.Body className="image_Box">
                    <Card.Img draggable="false" src={item?.productImage} />
                    <Card.Title className="mt-2">
                      {item?.productName}
                    </Card.Title>
                    <Card.Text>₹{item?.price}</Card.Text>
                    <Card.Text>{item?.description}</Card.Text>
                    <Card.Text>Stock: {item?.inStock}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CategorySection;
