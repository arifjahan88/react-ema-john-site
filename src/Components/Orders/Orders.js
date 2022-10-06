import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItems/ReviewItem";

const Orders = () => {
  const { products, givenCart } = useLoaderData();
  const [cart, setcart] = useState(givenCart);

  const handleRemoveItem = (id) => {
    const removeItem = cart.filter((product) => product.id !== id);
    setcart(removeItem);
    removeFromDb(id);
  };
  return (
    <div>
      <div className="shop-container">
        <div>
          {cart.map((product) => (
            <ReviewItem
              key={cart.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))}
        </div>
        <div className="details-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
