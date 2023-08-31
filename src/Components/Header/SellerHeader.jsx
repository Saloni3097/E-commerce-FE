import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";
import seller_logo from "../../Assets/Images/seller_logo.png";
const SellerHeader = () => {
  return (
    <div className="SellerMenu">
      <div className="side_bar">
        <div className="_heading">
          <img src={seller_logo} width="20%" />
        </div>
        <div className="_btns">
          <div>
            <ul>
              <li>
                <a href="/seller/dashboard">All Products</a>
              </li>
              {/* <li><button name='allProducts' onClick={(e) => { sidebarComponent(e); } }>All Products</button></li>
                      <li><button name='addProduct' onClick={(e) => { sidebarComponent(e); } }>Add Product</button></li>
                      <li><button name='deleteProduct' onClick={(e) => { sidebarComponent(e); } }>Delete Product</button></li>
                      <li><button name='updateProduct' onClick={(e) => { sidebarComponent(e); } }>Update Product</button></li> */}
              <li>
                <a href="/seller/dashboard/addProduct">Add Products</a>
              </li>
              <li>
                <a href="/seller/products">Delete Products</a>
              </li>
              <li>
                <a href="/seller/products">Update Products</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
