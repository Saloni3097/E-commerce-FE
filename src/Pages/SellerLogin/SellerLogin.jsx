import React, { useEffect, useState } from "react";
import { Container, Row, Navbar, Nav, NavLink, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import "./style.scss";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiWalletAlt } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ProfilePic from "../../Assets/Images/profile.png";
import Desktop_2_sell from "../../Assets/Images/Desktop_2_sell.webp";
import { getCategories } from "../../Components/ApiCalls/apis";
import example from "../../Assets/Images/example.webp";
import _03_1 from "../../Assets/Images/_03_1.webp";
import { TiTick } from "react-icons/ti";
import Footer from "../../Components/Footer/Footer";
import Login from "../../Components/Login/Login";
const SellerLogin = () => {
  const [categoriesName, setCategoriesName] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    categories();
  }, []);
  const categories = async () => {
    const res = await getCategories();
    console.log("categories res", res.data);
    if (res.status === 200 && res.data) setCategoriesName(res.data);
  };
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  const handleLogin = () => {
    setModalShow(true);
  };

  return (
    <div className="sellerLoginMainWraper">
      <Login
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
      <Container fluid>
        <Row style={{ borderBottom: "1px solid #c3c3c3" }}>
          <Col md="1"></Col>
          <Col md="10">
            <p className="my-3" style={{ color: "rgb(0 0 0 / 65%)" }}>
              Explore More Products to sell!
            </p>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Navbar
            className="navbar_header"
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <Col md="1">
              <Navbar.Brand className="header_logo">
                <Link to="/seller">
                  <img src={logo} width="100%" />
                </Link>
              </Navbar.Brand>
            </Col>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar
              id="basic-navbar-nav"
              className="d-inline-block w-100"
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <Col md="8" className="text-center" style={{ float: "left" }}>
                <Nav className="d-inline-block">
                  <NavLink
                    to="#"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000" }}
                  >
                    Sell Online
                  </NavLink>
                  <NavLink
                    to="#"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000" }}
                  >
                    Fees And Commision
                  </NavLink>
                  <NavLink
                    to="#"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000" }}
                  >
                    Grow
                  </NavLink>
                  <NavLink
                    to="#"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000" }}
                  >
                    Learn
                  </NavLink>
                  <NavLink
                    href="/"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000" }}
                  >
                    Back to Home
                  </NavLink>
                </Nav>
              </Col>
              <Col md="4" style={{ float: "left", textAlign: "center" }}>
                <Nav className="d-inline-block">
                  <a onClick={handleLogin}>Login</a>

                  <NavLink
                    to="#"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000", backgroundColor: "#f27e4c" }}
                  >
                    Start Selling
                  </NavLink>
                </Nav>
              </Col>
            </Navbar>
          </Navbar>
        </Row>
      </Container>
      <section>
        <Container fluid>
          <Row>
            <div className="header_banner">
              <h1>Sell Online with E-commerce</h1>
            </div>
          </Row>
        </Container>
      </section>
      <section className="abtSection">
        <Container>
          <Row className="text-center">
            <Col>
              <span style={{ fontSize: "3rem", color: "#fa7b53" }}>
                <FaPeopleGroup />
              </span>
              <p>45 crore+ Flipkart customers</p>
            </Col>
            <Col>
              <span style={{ fontSize: "3rem", color: "#fa7b53" }}>
                <BiWalletAlt />
              </span>
              <p>7* days secure & regular payments</p>
            </Col>
            <Col>
              <span style={{ fontSize: "3rem", color: "#fa7b53" }}>
                <FaCartArrowDown />
              </span>
              <p>Low cost of doing business</p>
            </Col>
            <Col>
              <span style={{ fontSize: "3rem", color: "#fa7b53" }}>
                <FiPhoneCall />
              </span>
              <p>One click Seller Support</p>
            </Col>
            <Col>
              <span style={{ fontSize: "3rem", color: "#fa7b53" }}>
                <FaPeopleGroup />
              </span>
              <p>45 crore+ Flipkart customers</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="testmonialSection">
        <div>
          <Container>
            <Row>
              <div className="testimonialHeading">
                <h2>
                  <span style={{ color: "rgb(250, 123, 83)" }}>
                    Seller Success
                  </span>{" "}
                  Stories
                </h2>
              </div>
              <div
                className="testimonialSlider"
                style={{
                  backgroundColor: "rgb(245, 251, 255)",
                  borderRadius: "25px",
                  padding: "25px",
                }}
              >
                <Slider {...settings}>
                  <Row className="d-flex">
                    <Col md="3">
                      <div className="testimonialImage">
                        <img src={ProfilePic} width="50%" />
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="testimonialText">
                        <h5>Raju Lunawath,Amazestore</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="d-flex">
                    <Col md="3">
                      <div className="testimonialImage">
                        <img src={ProfilePic} width="50%" />
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="testimonialText">
                        <h5>Raju Lunawath,Amazestore</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Slider>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <Container fluid>
        <Row>
          <hr />
        </Row>
      </Container>
      <section className="dataSection">
        <Container>
          <Row>
            <div className="dataContent">
              <div className="d-flex createAcc">
                <div>
                  <h4>Create Account</h4>
                  <hr />

                  <p>
                    Creating your Flipkart seller account is a quick process,
                    taking less than 10 minutes, and requires only 3 documents.
                    Follow the checklist to ensure a seamless account creation
                    experience. By having these documents ready, you can
                    streamline the account creation process and get started on
                    Flipkart as an online seller in no time.
                  </p>
                </div>
                <div>
                  <img src={Desktop_2_sell} />
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <h4>Select Category</h4>
                  <hr />
                </div>
                <div className="categories mt-3">
                  <ul
                    style={{
                      padding: "0px",
                    }}
                  >
                    {categoriesName.slice(0, 4).map((item) => (
                      <li>
                        <a href="#">{item.categoryName}</a>
                      </li>
                    ))}
                  </ul>
                  <ul
                    style={{
                      marginLeft: "10rem",
                      position: "relative",
                      top: "-40px",
                    }}
                  >
                    {categoriesName.slice(4, 7).map((item) => (
                      <li>
                        <a href="#">{item.categoryName}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 d-flex listProducts">
                <div>
                  <h4>List Products</h4>
                  <hr />

                  <p>
                    What is a listing? A listing refers to the process of
                    registering your product on the Flipkart platform, making it
                    visible to customers, and enabling them to view and purchase
                    your product. It involves creating a detailed product page
                    that includes essential information such as product title,
                    description, images, pricing, and other relevant details. A
                    well-crafted listing helps attract potential customers and
                    facilitates the sale of your product on Flipkart.
                  </p>
                </div>
                <div>
                  <img src={example} />
                </div>
              </div>
              <div className="mt-5 d-flex growFaster">
                <div>
                  <h4>Grow Faster</h4>
                  <hr />

                  <p>
                    At Flipkart, we recognize that there may be times when you
                    require additional assistance for your online business.
                    That's why, with your Flipkart seller account, you gain
                    access to a diverse range of tools and support functions
                    designed to foster business growth. These include:
                  </p>

                  <ul>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ fontSize: "22px", color: "rgb(250, 123, 83)" }}
                      >
                        <TiTick />
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Price Recommendation Tool : Helps you determine optimal
                        pricing for your products.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={_03_1} width="320px" height="350px" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default SellerLogin;
