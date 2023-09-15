import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { Link, NavLink, Navigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Login from "../../Components/Login/Login";
import appContext from "../../Context/ContextApp";
import { getItemLocalStorage } from "../../Utils/BrowserServices";
import { useNavigate } from "react-router-dom";
import "./style.scss";
let checkLogin;
const Header = () => {
  const navigate = useNavigate();
  const handleContext = useContext(appContext);
  const [loginData, setLoginData] = useState();
  useEffect(() => {
    setInterval(() => {
      loginstateHandle();
    }, 1000);
  }, [checkLogin]);

  const loginstateHandle = () => {
    checkLogin = getItemLocalStorage("isLogin");
    if (checkLogin === "true") {
      setLoginData(true);
    } else {
      setLoginData(false);
    }
  };

  const getProfile = () => {
    navigate("/userProfile");
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
                    {loginData && loginData ? (
                      <Button onClick={getProfile}>Profile</Button>
                    ) : (
                      <Button
                        onClick={() => {
                          handleContext.setLogInBoxOpen(true);
                        }}
                        style={{ padding: "0px 40px" }}
                      >
                        Login
                      </Button>
                    )}

                    <NavLink className="nav_menu" to="/seller">
                      Become a Seller
                    </NavLink>
                    <NavLink className="nav_menu" to="/">
                      Home
                    </NavLink>
                    <NavLink className="nav_menu" to="/cart">
                      Cart
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Login
                show={handleContext.logInBoxOpen}
                onHide={handleContext.handleClose}
                boxProp={handleContext.setLogInBoxOpen}
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
