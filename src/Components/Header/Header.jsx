import React, { useState } from "react";
import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Login from "../../Components/Login/Login";
import "./style.scss";

const Header = () => {
  const [logInBoxOpen, setLogInBoxOpen] = useState(false);
  const handleClose = () => {
    setLogInBoxOpen(false);
  };
  return (
    <>
      <section className="navbar_wrapper">
        <Container>
          <Row>
            <Col md="1"></Col>
            <Col md="10">
              <Navbar className="navbar_header">
                <Navbar.Brand className="header_logo">
                  <Link to="/">
                    <img src={logo} />
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navmenu">
                  <Nav>
                    <div className="search_wrapper">
                      <FiSearch />
                      <input
                        type="search"
                        placeholder="Search for products, brand and more..."
                      />
                    </div>
                    <Button
                      onClick={() => {
                        setLogInBoxOpen(true);
                      }}
                      style={{ padding: "0px 40px" }}
                    >
                      Login
                    </Button>
                    <NavLink className="nav_menu" to="/seller">
                      Become a Seller
                    </NavLink>
                    <NavLink
                      className="nav_menu"
                      to="/"
                      // style={({ isActive }) => ({
                      //   color: isActive ? "#f27e4c" : "#333333",
                      // })}
                    >
                      Home
                    </NavLink>
                    <NavLink className="nav_menu" to="/cart">
                      Cart
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Login
                show={logInBoxOpen}
                onHide={handleClose}
                boxProp={setLogInBoxOpen}
              />
            </Col>

            <Col md="1"></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
