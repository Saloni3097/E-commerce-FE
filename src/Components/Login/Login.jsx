import React from "react";
import { Col, Container, Row, Form, Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { loginSchema } from "../../Components/Schemas";
import { login } from "../../Components/ApiCalls/apis";
import { Link } from "react-router-dom";
import "./style.scss";
import { useCookies } from "react-cookie";
const Login = (props) => {
  // const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSignup = () => {
    props.boxProp(false);
  };

  const handleForgotPassword = () => {
    props.boxProp(false);
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      onSubmit: async (values, action) => {
        const res = await login(values);
        // console.log("values>>>>", res);
        if (res.data && res.status === 200) {
          toast.success(res.data.message);
          // console.log("Success", res.data.message);
          setTimeout(() => {
            props.onHide();
          }, 2000);
          setCookie("Token", `${res.data.token}`, {
            path: "/",
          });
        } else {
          toast.error(res);
          // console.log("Error", res);
        }

        action.resetForm();
      },
    });
  return (
    <section>
      <Container>
        <Row>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-meta"
          >
            <Modal.Header
              className="btn-close custombtn"
              closeButton
            ></Modal.Header>

            <Modal.Body className="modal_wrapper">
              <Row>
                <Col lg={6} className="img-Container">
                  <h5 style={{ textAlign: "center" }}>
                    Get access to your Orders, Wishlist and Recommendations.
                  </h5>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                    alt="Login"
                  />
                </Col>
                <Col lg={6}>
                  <h3>LOGIN</h3>
                  <hr />
                  <Form onSubmit={handleSubmit} className="form">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        className="text"
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
                        name="password"
                        placeholder="Password"
                        value={values?.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password ? (
                        <p className="error">{errors.password}</p>
                      ) : null}
                    </Form.Group>

                    <Button
                      className="login-button"
                      type="submit"
                      // onClick={notify}
                    >
                      Login
                    </Button>
                  </Form>
                  <div className="sign-up">
                    <span>
                      <Link to="/signup" onClick={handleSignup}>
                        Signup
                      </Link>
                    </span>
                    <span style={{ marginLeft: "1.5rem" }}>|</span>
                    <span style={{ marginLeft: "1.5rem" }}>
                      <Link to="/forgotPassword" onClick={handleForgotPassword}>
                        Forgot Password
                      </Link>
                    </span>
                  </div>
                </Col>
                <ToastContainer
                  position="top-right"
                  // autoClose={10000}
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
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
