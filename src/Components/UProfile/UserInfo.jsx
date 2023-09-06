import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.scss";

const UserInfo = () => {
  return (
    <>
      <div>
        {" "}
        <div className="name_wrapper">
          <Row>
            <Form.Label>Personal Information</Form.Label>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Last Name" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Button className="name_button">Save</Button>
            </Col>
          </Row>
        </div>
        <div className="email_wrapper">
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address </Form.Label>
                <Form.Control placeholder="Email Address" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Button className="save_button">Save</Button>
            </Col>
          </Row>
        </div>
        <Row>
          <Form.Label>Gender </Form.Label>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Male" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Female" />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserInfo;
