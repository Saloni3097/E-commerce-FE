import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { addProductSchema } from "../Schemas";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getCategories, productUplolad } from "../ApiCalls/apis";
import product from "../../Assets/Images/product.jpeg";
import "./style.scss";
const AddProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const [dataPreview, setDataPreview] = useState({});
  const [productImgage, setProductImgage] = useState();
  const [productCategories, setProductCategories] = useState([]);
  const initialValues = {
    productName: "",
    description: "",
    price: null,
    inStock: false,
    category: "",
    productImageUrl: null,
  };
  useEffect(() => {
    getAllcategories();
  }, []);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: addProductSchema,
      validateOnChange: false,
      onSubmit: async (values, action) => {
        let fdata = new FormData();
        fdata.append("productName", values.productName);
        fdata.append("description", values?.description);
        fdata.append("price", values.price);
        fdata.append("inStock", values.inStock);
        fdata.append("category", values?.category);
        fdata.append("productImageUrl", productImgage);
        setDataPreview(values);
        await productUplolad(fdata);
        action.resetForm();
      },
    });

  const getAllcategories = async () => {
    const { data } = await getCategories();
    setProductCategories(data);
  };

  const getFile = (e) => {
    const file = e.target.files[0];
    setProductImgage(file);
    // const data = new FormData();

    // data.append('image',file);
    // console.log(data)

    // values.productImageUrl = data
  };
  return (
    <div>
      <Container className="_productError">
        <Row>
          <Col md="8">
            <h3 style={{ color: "#F27E4C" }}>Add Product Details</h3>
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group>
                <Form.Label>Product Image</Form.Label>
                <Form.Control className="text" type="file" onChange={getFile} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text"
                  name="productName"
                  placeholder="Product Name"
                  value={values?.productName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.productName && errors.productName ? (
                  <p className="error">{errors.productName}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  type="text"
                  className="text"
                  name="description"
                  placeholder="Description of product"
                  value={values?.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description ? (
                  <p className="error">{errors.description}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  className="text"
                  placeholder=" Product Price"
                  value={values?.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.price && errors.price ? (
                  <p className="error">{errors.price}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="inStock"
                  className="checkbox"
                  value={values?.inStock}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.inStock && errors.inStock ? (
                  <p className="error">{errors.inStock}</p>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label>Select Category</Form.Label>
                <Form.Select
                  name="category"
                  className="text"
                  value={values?.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select Category</option>
                  {/* <option value="">Select Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="Accesories">Accesories</option>
                  <option value="Mens_Wear">Men's Wear</option>
                  <option value="Womens_Wear">Women's Wear</option> */}
                  {productCategories.map((item) => (
                    <option value={item.categoryName}>
                      {item.categoryName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              {/* <select name='category' value={values?.category} onChange={handleChange} onBlur={handleBlur}>

                                <option value="mobile">Mobile</option>
                                <option value="Accesories">Accesories</option>
                                <option value="Mens_Wear">Men's Wear</option>
                                <option value="Womens_Wear">Women's Wear</option>

                            </select> */}
              {touched.category && errors.category ? (
                <p className="error">{errors.category}</p>
              ) : null}

              <Button
                type="submit"
                className="mt-3"
                style={{ backgroundColor: "#F27E4C", border: "none" }}
              >
                Add Product
              </Button>
            </Form>
          </Col>
          <Col md="4">
            <div>
              <Card>
                <Card.Img src={values?.productImageUrl} />
                <Card.Body>
                  <Card.Title style={{ color: "#F27E4C" }}>
                    {values?.productName}
                  </Card.Title>
                  <Card.Text>
                    <span style={{ color: "#7c7c7c" }}>
                      {values?.description}
                    </span>
                    <br />
                    <h4 className="mt-3" style={{ color: "#F27E4C" }}>
                      Rs.{values?.price}
                    </h4>
                    <p className="mt-3">Stock : {values?.inStock}</p>
                    Category : {values?.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
