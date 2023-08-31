import React from "react";
import { Container, Row, Navbar, Nav, NavLink, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import "./style.scss";
const index = () => {
  return (
    <div className="sellerLoginMainWraper">
      <Container>
        <Row>
          <p className="my-3" style={{ color: "rgb(0 0 0 / 65%)" }}>
            Explore More Products to sell!
          </p>

          <Navbar
            className="navbar_header"
            style={{
              borderTop: "1px solid #c3c3c3",
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
                  <NavLink
                    to="#"
                    className="nav_menu d-inline-block px-3 py-3"
                    style={{ color: "#000000" }}
                  >
                    Login
                  </NavLink>
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
    </div>
  );
};

export default index;
