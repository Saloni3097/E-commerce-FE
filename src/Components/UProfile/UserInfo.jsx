import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./style.scss";

const UserInfo = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const handleFormData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  console.log("formData", form);
  return (
    <>
      <div>
        {" "}
        <Form className="form_wrapper">
          <div className="name_wrapper">
            <Row>
              <Form.Label>Personal Information</Form.Label>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={form?.firstName || ""}
                    placeholder="First Name"
                    onChange={handleFormData}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={form?.lastName || ""}
                    placeholder="Last Name"
                    onChange={handleFormData}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className="email_wrapper">
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form?.email || ""}
                    placeholder="Email Address"
                    onChange={handleFormData}
                  />
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
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={handleFormData}
              />{" "}
              Male
            </Col>
            <Col>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={handleFormData}
              />{" "}
              Female
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default UserInfo;
