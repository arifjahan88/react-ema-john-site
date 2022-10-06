import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const { products, givenCart } = useLoaderData();
  const [cart, setcart] = useState(givenCart);
  return (
    <div>
      <div className="shop-container">
        <div className="prooducts-container"></div>
        <div className="details-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
