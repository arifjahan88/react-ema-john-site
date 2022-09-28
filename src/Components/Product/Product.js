import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product, Hundleaddtocart } = props;
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <p>Price : ${price}</p>
        <p>Manufacture : {seller}</p>
        <p>Ratings : {ratings}</p>
      </div>
      <button onClick={() => Hundleaddtocart(product)} className="cart-btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
