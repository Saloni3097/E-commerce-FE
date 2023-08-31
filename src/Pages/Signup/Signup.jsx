import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { signupData } from "../../Components/ApiCalls/apis";
import { useNavigate, Link } from "react-router-dom";
import { signupSchema } from "../../Components/Schemas";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import Login from "../../Pages/Login/Login";
import "./style.scss";
const initialValues = {
  username: "",
  email: "",
  password: "",
  role: "",
};

const Signup = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, action) => {
        try {
          const res = await signupData(values);
          if (res.data && res.status === 200) {
            toast.success(res.data.message);
            setCookie("token", `${res.data.token}`, {
              path: "/",
            });
          }
          if (values.role === "seller") {
            navigate("/seller");
          } else {
            navigate("/");
          }
        } catch (error) {
          toast.error(error.response.data);
        }
        // if (values.role === "2") {
        //   navigate("/login");
        // } else {
        //   navigate("/");
        // }
        action.resetForm();
      },
    });

  return (
    <>
      <section className="signup_wrapper">
        <Container>
          <Row>
            <Col lg={6} className="img-Container">
              <h2 style={{ textAlign: "center" }}>
                Looks like you're new here!
              </h2>
              <h6 style={{ textAlign: "center" }}>
                Sign up with your email to get started.
              </h6>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                alt="register"
              />
            </Col>
            <Col lg={6}>
              <h3>REGISTER</h3>
              <hr />
              <Form onSubmit={handleSubmit} className="form">
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    className="text"
                    autoComplete="off"
                    name="username"
                    placeholder="Username"
                    value={values?.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username ? (
                    <p className="error">{errors.username}</p>
                  ) : null}
                </Form.Group>
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
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="text"
                    autoComplete="off"
                    name="password"
                    placeholder="Password"
                    value={values?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="error">{errors.password}</p>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    name="role"
                    className="text"
                    value={values?.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>Choose...</option>
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                  </Form.Select>
                  {errors.role && touched.role ? (
                    <p className="error">{errors.role}</p>
                  ) : null}
                </Form.Group>

                <Button className="signup-button" type="submit">
                  Signup
                </Button>
              </Form>
              <p className="sign-up">
                Already have an account?{" "}
                {/* <a
                  style={{ color: "rgb(123, 190, 254)" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In now
                </a> */}
                <Link to="/login">Sign In Now</Link>
              </p>
            </Col>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signup;
