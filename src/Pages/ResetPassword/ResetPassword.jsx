import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { resetPassword } from "../../Components/ApiCalls/apis";
import { resetPasswordSchema } from "../../Components/Schemas";
import { toast } from "react-toastify";
import Login from "../../Components/Login/Login";
import "./style.scss";
// import { useNavigate } from "react-router-dom";
const initialValues = {
  newPassword: "",
  confirmPassword: "",
};
const ResetPassword = () => {
  // const navigate = useNavigate();
  const [logInBoxOpen, setLogInBoxOpen] = useState(false);
  const handleClose = () => {
    setLogInBoxOpen(false);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: async (values, action) => {
        const res = await resetPassword(values);
        console.log("Response", res);
        if (res.status === 200 && res.data) {
          toast.success(res.data.message);
        } else {
          toast.error(res);
        }

        action.resetForm();
      },
    });

  return (
    <section className="resetPassword_wrapper">
      <Container>
        <Row>
          <Col lg={6} className="img-Container">
            <h2 style={{ textAlign: "center" }}>Reset Your Password?</h2>
            <h6 style={{ textAlign: "center" }}>
              Enter the password to login to your account.
            </h6>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="password"
            />
          </Col>
          <Col lg={6}>
            <h3>RESET PASSWORD</h3>
            <hr />
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  className="text"
                  autoComplete="off"
                  name="newPassword"
                  placeholder="New Password"
                  value={values?.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.newPassword && touched?.newPassword ? (
                  <p className="error">{errors?.newPassword}</p>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  className="text"
                  autoComplete="off"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values?.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.confirmPassword && touched?.confirmPassword ? (
                  <p className="error">{errors?.confirmPassword}</p>
                ) : null}
              </Form.Group>
              <Button className="reset-button" type="submit">
                Reset Password
              </Button>
            </Form>
            <Login
              show={logInBoxOpen}
              onHide={handleClose}
              boxProp={setLogInBoxOpen}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResetPassword;
