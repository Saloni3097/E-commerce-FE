import React, { useState } from "react";
// import UserProfile from "../../Components/Common/UserProfile";
// import ProfilePage from "./ProfilePage";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import UserInfo from "../../Components/UProfile/UserInfo";

const Index = () => {
  const [userValue, setUserValue] = useState("");
  const handleUserValue = (e) => {
    console.log(">>>>", e.target.name);
    setUserValue(e.target.name);
    console.log(">", userValue);
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
                    <button
                      name="UserInfo"
                      onClick={(e) => {
                        handleUserValue(e);
                      }}
                    >
                      Profile Information
                    </button>
                  </li>
                  <li>
                    <p>Manage Addresses</p>
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
                    <p>Gift Cards</p>
                  </li>
                  <li>
                    <p>Saved UPI</p>
                  </li>
                  <li>
                    <p>Saved Cards</p>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="sidebar_item">
                <ul>
                  <li>
                    <h6>Logout</h6>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6}>{userValue === "UserInfo" ? <UserInfo /> : "Error"}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Index;
