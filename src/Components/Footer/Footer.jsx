import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import instagram from "../../Assets/Images/instagram.png";
import facebook from "../../Assets/Images/facebook.png";
import twitter from "../../Assets/Images/twitter.png";
import linkedin from "../../Assets/Images/linkedin.png";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <section className="footer_wrapper">
        <Container className="container_wrapper">
          <Row>
            <Col lg={4}>
              <p>
                An e-commerce website is one that allows people to buy and sell
                physical goods, services, and digital products over the
                internet. Through an e-commerce website.
              </p>
            </Col>

            <Col lg={2}>
              <h5>Category</h5>
              <ul>
                <li>
                  {" "}
                  <Link to="/explore" target="_blank">
                    Mobiles
                  </Link>
                </li>
                <li>
                  <Link to="/explore" target="_blank">
                    Fashion
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/nftForm" target="_blank">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/nftForm" target="_blank">
                    Home & Furniture
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={2}>
              <h5>Quick Link</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </Col>

            <Col lg={4}>
              <h5>Social Media</h5>
              <ul className="social_icons">
                <li>
                  <Link
                    to="https://www.instagram.com/flipkart/?hl=en"
                    target="_blank"
                  >
                    <img src={instagram} />
                  </Link>
                </li>

                <li>
                  <Link to="https://twitter.com/flipkart" target="_blank">
                    <img src={twitter} />
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://in.linkedin.com/company/flipkart"
                    target="_blank"
                  >
                    <img src={linkedin} />
                  </Link>
                </li>

                <li>
                  <Link to="https://www.facebook.com/flipkart" target="_blank">
                    <img src={facebook} />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12}>
              <ul className="bottom">
                <li>© E-Commerce. All rights reserved.</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
