import React, { useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { phoneNumberSchema } from "../../Components/Schemas";
import "./style.scss";

const AddressInfo = () => {
  const [formData, setFormData] = useState({});
  const initialValues = {
    phoneNumber: "",
    pincode: "",
  };
  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const inputRef = useRef(null);
  const onWheel = () => {
    inputRef.current.blur();
  };
  console.log("handleFormData", formData);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: phoneNumberSchema,
      onSubmit: async (values, action) => {
        console.log("val", values);
      },
      // onSubmit: async (values, action) => {
      //   const res = await forgotPassword(values);
      //   // console.log("Response: ", res);
      //   // console.log("Values", values);
      //   if (res.data && res.status === 200) {
      //     toast.success(res.data.msg);
      //   } else {
      //     toast.error(res);
      //     // console.log("Error", res);
      //   }
      //   action.resetForm();
      // },
    });
  console.log("values", values);
  return (
    <>
      <div>
        <Form onSubmit={handleSubmit} className="form">
          <Row>
            <h5>MANAGE ADDRESSES</h5>

            <Form.Label>Add a New Address</Form.Label>

            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="text"
                  type="text"
                  placeholder="Name"
                  name="name"
                  // value={formData.name || ""}
                  value={values?.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  className="text"
                  ref={inputRef}
                  onWheel={onWheel}
                  // min="0"
                  name="phoneNumber"
                  // value={formData.phoneNumber || ""}
                  value={values?.phoneNumber}
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <p className="error">{errors.phoneNumber}</p>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="text"
                  type="number"
                  name="pincode"
                  // value={formData.pincode || ""}
                  value={values?.pincode}
                  placeholder="Pincode"
                  // onChange={handleFormData}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.pincode && touched.pincode ? (
                  <p className="error">{errors.pincode}</p>
                ) : null}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="text"
                  ref={inputRef}
                  onWheel={onWheel}
                  type="text"
                  name="locality"
                  // value={formData.locality || ""}
                  value={values?.locality}
                  placeholder="Locality"
                  onChange={handleFormData}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="text"
                  as="textarea"
                  name="address"
                  // value={formData.address || ""}
                  value={values?.address}
                  placeholder="Address"
                  onChange={handleFormData}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="text"
                  type="text"
                  name="dist"
                  // value={formData.dist || ""}
                  value={values?.dist}
                  placeholder="City/District/Town"
                  onChange={handleFormData}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Button type="submit">SAVE</Button>
            </Col>
            <Col lg={6}>
              <Button>CANCEL</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddressInfo;
