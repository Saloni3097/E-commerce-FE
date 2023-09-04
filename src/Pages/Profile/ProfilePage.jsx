import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={8}>
              <div>
                {" "}
                <Row>
                  <Form.Label>Personal Information</Form.Label>
                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="First Name" />
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address </Form.Label>
                  <Form.Control placeholder="Email Address" />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                  <Form.Label>Disabled select menu</Form.Label>
                  <Form.Select>
                    <option>Disabled select</option>
                  </Form.Select>
                </Form.Group> */}
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProfilePage;
