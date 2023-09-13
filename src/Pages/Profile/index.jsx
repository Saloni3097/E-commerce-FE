import React, { useState } from "react";
// import UserProfile from "../../Components/Common/UserProfile";
// import ProfilePage from "./ProfilePage";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.scss";
import UserInfo from "../../Components/UProfile/UserInfo";
import AddressInfo from "../../Components/UProfile/AddressInfo";
import GiftCards from "../../Components/UProfile/GiftCards";
import SaveUPI from "../../Components/UProfile/SaveUPI";
import SaveCards from "../../Components/UProfile/SaveCards";
const Index = () => {
  const [userValue, setUserValue] = useState("");
  const handleUserValue = (e) => {
    setUserValue(e.target.name);
  };
  return (
    <section className="sidebar_wrapper">
      <Container fluid>
        <Row>
          <Col lg={4}>
            <div className="sidebar_items">
              <div className="sidebar_item">
                <i className="fas fa-home"></i>
                <ul>
                  <li>
                    <h6>ACCOUNT SETTINGS</h6>
                  </li>
                  <li>
                    {" "}
                    <Button
                      name="UserInfo"
                      onClick={(e) => {
                        handleUserValue(e);
                      }}
                    >
                      Profile Information
                    </Button>
                  </li>
                  <li>
                    {/* <p>Manage Addresses</p> */}
                    <Button
                      name="addrInfo"
                      onClick={(e) => {
                        handleUserValue(e);
                      }}
                    >
                      Manage Addresses
                    </Button>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="sidebar_item">
                <i className="fas fa-user"></i>

                <ul>
                  <li>
                    <h6>PAYMENTS</h6>
                  </li>
                  <li>
                    {" "}
                    {/* <p>Gift Cards</p> */}
                    <Button
                      name="giftCard"
                      onClick={(e) => {
                        handleUserValue(e);
                      }}
                    >
                      Gift Cards
                    </Button>
                  </li>
                  <li>
                    {/* <p>Saved UPI</p> */}
                    <Button
                      name="savedUPI"
                      onClick={(e) => {
                        handleUserValue(e);
                      }}
                    >
                      Saved UPI
                    </Button>
                  </li>
                  <li>
                    {/* <p>Saved Cards</p> */}
                    <Button
                      name="saveCards"
                      onClick={(e) => {
                        handleUserValue(e);
                      }}
                    >
                      Saved Cards
                    </Button>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="sidebar_item">
                <ul>
                  <li>
                    {/* <h6>Logout</h6> */}
                    <Button>Logout</Button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            {userValue === "UserInfo" ? (
              <UserInfo />
            ) : userValue === "addrInfo" ? (
              <AddressInfo />
            ) : userValue === "giftCard" ? (
              <GiftCards />
            ) : userValue === "savedUPI" ? (
              <SaveUPI />
            ) : userValue === "saveCards" ? (
              <SaveCards />
            ) : (
              <UserInfo />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Index;
