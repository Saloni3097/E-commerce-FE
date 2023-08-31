import React, { useEffect, useState, memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { getAllProducts } from "../../ApiCalls/apis";
import { Link } from "react-router-dom";
import "./style.scss";

const BestProducts = ({ categoryNames }) => {
  const [bestProducts, setBestProducts] = useState([]);
  const [productByCategory, setProductByCategory] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };
  useEffect(() => {
    product();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryNames]);

  const product = async () => {
    try {
      const res = await getAllProducts();
      setBestProducts(res?.data?.data);
    } catch (err) {
      console.error(err);
    }
    setProductByCategory(
      categoryNames?.map((category) => ({
        category,
        products: bestProducts.filter(
          (product) => product.category === category
        ),
      }))
    );
  };

  return (
    <>
      <section className="bestProduct_wrapper">
        <Container>
          {productByCategory.map(({ category, products }) => (
            <Row>
              <Col lg={12}>
                <div className="heading_wrapper" key={category}>
                  <h2>{category}</h2>
                </div>
              </Col>
              <Slider {...settings}>
                {products?.map((product) => (
                  <Col>
                    <div key={product?.id}>
                      <Link to={`/productDetail/${product?.productName}`}>
                        <Card className="bestCard_wrapper">
                          <Card.Body className="card_imgContainer">
                            <Card.Img src={product?.productImage}></Card.Img>
                            <Card.Title className="mt-3 card_title">
                              {product?.productName}
                            </Card.Title>
                            <p>{product?.description}</p>
                            <p>₹{product?.price}</p>
                            <p>{product?.inStock}</p>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  </Col>
                ))}
              </Slider>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default memo(BestProducts);
