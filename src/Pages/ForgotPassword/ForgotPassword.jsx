import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { forgotPassword } from "../../Components/ApiCalls/apis";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../Components/Schemas";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import "./style.scss";
const initialValues = {
  email: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgotPasswordSchema,
      onSubmit: async (values, action) => {
        const res = await forgotPassword(values);
        // console.log("Response: ", res);
        // console.log("Values", values);
        if (res.status === 200 && res.data && res.data.jwtToken) {
          const tokenResp = jwt(res.data.jwtToken);
          console.log("Token Res", tokenResp);
          Cookies.set("token", `${res.data.jwtToken}`);
          toast.success(res.data.msg);
        } else {
          toast.error(res);
          // console.log("Error", res);
        }
        action.resetForm();
      },
    });

  return (
    <section className="password_wrapper">
      <Container>
        <Row>
          <Col lg={6} className="img-Container">
            <h2 style={{ textAlign: "center" }}>Forgot Your Password?</h2>
            <h6 style={{ textAlign: "center" }}>
              Enter the email address associated with your account.
            </h6>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="password"
            />
          </Col>
          <Col lg={6}>
            <h3>FORGOT PASSWORD</h3>
            <hr />
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  className="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Email"
                  value={values?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="error">{errors.email}</p>
                ) : null}
              </Form.Group>

              <Button className="submit-button" type="submit">
                Submit
              </Button>
            </Form>
            <p className="account">
              Need an account?{" "}
              <a
                style={{ color: "rgb(123, 190, 254)" }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create an account
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForgotPassword;
