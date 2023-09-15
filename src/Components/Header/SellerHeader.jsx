import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "./style.scss";
import "./sellerHeader.scss";
import seller_logo from "../../Assets/Images/seller_logo.png";
const SellerHeader = () => {
  return (
    <>
      <div className="_heading">
        <img src={seller_logo} width="20%" />
      </div>
      <div className="SellerMenu">
        <div className="side_bar">
          <div className="_btns">
            <ul>
              <a href="/seller/dashboard">
                <li>All Products</li>
              </a>
              {/* <li><button name='allProducts' onClick={(e) => { sidebarComponent(e); } }>All Products</button></li>
              <li><button name='addProduct' onClick={(e) => { sidebarComponent(e); } }>Add Product</button></li>
              <li><button name='deleteProduct' onClick={(e) => { sidebarComponent(e); } }>Delete Product</button></li>
              <li><button name='updateProduct' onClick={(e) => { sidebarComponent(e); } }>Update Product</button></li> */}
              <a href="/seller/dashboard/addProduct">
                <li>Add Products</li>
              </a>
              <a href="/seller/products">
                <li>Delete Products</li>
              </a>
              <a href="/seller/products">
                <li>Update Products</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerHeader;
