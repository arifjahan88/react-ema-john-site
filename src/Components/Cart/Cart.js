import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //console.log(cart);

  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandtotal = price + shipping + tax;

  return (
    <div className="order-container">
      <h2>Order Summury</h2>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${price}</p>
      <p>Total Shipping Charge : ${shipping}</p>
      <p>Tax : {tax}</p>
      <h4>Grand Total : {grandtotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
