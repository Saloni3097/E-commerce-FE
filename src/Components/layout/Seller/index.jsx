import React from "react";
import Seller from "../../../Pages/Seller";
import SellerHeader from "../../Header/SellerHeader";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import Cookies from "js-cookie";
const SellerLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.set("isLogin", "false", {});
    navigate("/login");
  };
  return (
    <div>
      <Container fluid>
        <Row style={{ position: "sticky" }}>
          <Col md="3" className="px-0">
            <SellerHeader />
          </Col>

          <Col md="9">
            <Row style={{ marginBottom: "5rem", marginTop: "1rem" }}>
              <Col md="8" className="text-end">
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="search"
                      className="w-50 d-inline-block"
                      placeholder="Searching..."
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col md="4">
                <div className="text-center">
                  <CgProfile size={30} />
                  <IoMdNotifications size={30} className="ms-3" />
                  <Button
                    className="ms-3"
                    style={{ backgroundColor: "#F27E4C", border: "none" }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </div>
              </Col>
            </Row>

            <Outlet />
          </Col>
        </Row>
      </Container>

      {/* <Seller/> */}
    </div>
  );
};

export default SellerLayout;
