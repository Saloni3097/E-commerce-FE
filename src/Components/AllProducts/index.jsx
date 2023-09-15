import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import product from "../../Assets/Images/product.jpeg";
import { getSellerProducts } from ".././ApiCalls/apis";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [blankProduct, setBlankProduct] = useState("");
  useEffect(() => {
    getProducts();
  }, [products]);

  const getProducts = async () => {
    try {
      const data = await getSellerProducts();
      console.log(data);
      if (typeof data.data === "string") {
        setBlankProduct(data.data);
        console.log("data-seller====>", data);
      } else {
        setProducts(data.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);
  return (
    <div>
      <Container>
        <Row>
          <Col md="12">
            <Row>
              {products.length > 0 ? (
                <>
                  {products.map((item) => (
                    <Col md="4" className="mt-3">
                      <Card>
                        <Card.Img src={item.productImage} height="200px" />
                        <Card.Body>
                          <Card.Title style={{ color: "#F27E4C" }}>
                            {item?.productName}
                          </Card.Title>
                          <Card.Text>
                            <span style={{ color: "#7c7c7c" }}>
                              {item?.description}
                            </span>
                            <br />
                            <h4 className="mt-3" style={{ color: "#F27E4C" }}>
                              Rs.{item?.price}
                            </h4>
                            <p className="mt-3">Stock : {item?.inStock}</p>
                            Category : {item?.category}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </>
              ) : (
                <>
                  <Row>
                    <h5>{blankProduct}</h5>
                  </Row>
                </>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
