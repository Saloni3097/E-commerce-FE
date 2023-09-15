import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import "./index.css";
import AddProduct from "../../Components/AddProduct";
import AllProducts from "../../Components/AllProducts";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
// import { useCookies } from 'react-cookie'
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import seller_logo from "../../Assets/Images/seller_logo.png";
import "./index.scss";
const DashBoard = () => {
  const [sideBtnShow, setSideBtnShow] = useState("");
  // const [cookies,setCookie] = useCookies([])
  const sidebarComponent = (e) => {
    setSideBtnShow(e.target.name);
  };
  const navigate = useNavigate();
  // useEffect(() => {
  //   // debugger
  //   let res = Cookies.get("isLogin");
  //   if (res === "false") {
  //     navigate("/login");
  //   }
  // }, []);

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="dasshboard_header">
      <Container fluid>
        <Row>
          <Col md="2" className="float-left d-inline-block w-25">
            <Row style={{ position: "sticky", top: "0", height: "600px" }}>
              <div className="side_bar">
                <div className="_heading">
                  <img src={seller_logo} width="20%" />
                </div>
                <div className="_btns">
                  <div>
                    <ul>
                      {/* <li><a href="/seller/products">All Products</a></li> */}
                      <li>
                        <button
                          name="allProducts"
                          onClick={(e) => {
                            sidebarComponent(e);
                          }}
                        >
                          All Products
                        </button>
                      </li>
                      <li>
                        <button
                          name="addProduct"
                          onClick={(e) => {
                            sidebarComponent(e);
                          }}
                        >
                          Add Product
                        </button>
                      </li>
                      <li>
                        <button
                          name="deleteProduct"
                          onClick={(e) => {
                            sidebarComponent(e);
                          }}
                        >
                          Delete Product
                        </button>
                      </li>
                      <li>
                        <button
                          name="updateProduct"
                          onClick={(e) => {
                            sidebarComponent(e);
                          }}
                        >
                          Update Product
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col md="8" className="d-inline-block w-75">
            <div className="px-4 py-4">
              <Row>
                <Col md="8" className="text-end">
                  <Form>
                    <Form.Group>
                      <Form.Control
                        type="search"
                        className="w-50 d-inline-block"
                        placeholder="search"
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
            </div>
            <hr />

            {/* <Outlet/> */}
            {sideBtnShow === "addProduct" ? (
              <AddProduct />
            ) : (
              <>
                {sideBtnShow === "deleteProduct" ? (
                  <></>
                ) : (
                  <>
                    {sideBtnShow === "updateProduct" ? (
                      <></>
                    ) : (
                      <>
                        {sideBtnShow === "allProducts" ||
                        sideBtnShow === null ? (
                          <>
                            {" "}
                            <AllProducts />
                          </>
                        ) : (
                          <>
                            {" "}
                            <AllProducts />
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashBoard;
