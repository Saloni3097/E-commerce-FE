import React, { useState } from "react";
import { Nav, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./style.scss";
import Login from "../../Pages/Login/Login";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import SecondaryDropDownMenu from "./SecondaryDropDownMenu";

const Header = () => {
  const [logInBoxOpen, setLogInBoxOpen] = useState(false);
  const handleClose = () => {
    setLogInBoxOpen(false);
  };
  // const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
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
                    <NavLink className="nav_menu" to="#">
                      Become a Seller
                    </NavLink>
                    {/* <NavLink className="nav_menu" to="#">
                      <span
                        className="moreDropDown hidden sm:flex items-center font-medium gap-1 cursor-pointer"
                        onClick={() =>
                          setToggleSecondaryDropDown(!toggleSecondaryDropDown)
                        }
                      >
                        More
                        <span>
                          {toggleSecondaryDropDown ? (
                            <ExpandLessIcon sx={{ fontSize: "16px" }} />
                          ) : (
                            <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                          )}
                        </span>
                      </span>
                      {toggleSecondaryDropDown && <SecondaryDropDownMenu />}
                    </NavLink> */}
                    <NavLink
                      className="nav_menu"
                      to="/"
                      style={({ isActive }) => ({
                        color: isActive ? "#f27e4c" : "#333333",
                      })}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="nav_menu"
                      to="/cart"
                      style={({ isActive }) => ({
                        color: isActive ? "#f27e4c" : "#333333",
                      })}
                    >
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
