import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItems/ReviewItem";

const Orders = () => {
  const { givenCart } = useLoaderData();
  const [cart, setcart] = useState(givenCart);

  const handleRemoveItem = (id) => {
    const removeItem = cart.filter((product) => product._id !== id);
    setcart(removeItem);
    removeFromDb(id);
  };
  const clearCart = () => {
    setcart([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div>
          {cart.map((product) => (
            <ReviewItem
              key={cart._id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))}
          {cart.length === 0 && (
            <h2>
              No Item to review. Please <Link to="/">Shop</Link>
            </h2>
          )}
        </div>
        <div className="details-container">
          <Cart clearCart={clearCart} cart={cart}>
            <Link to="/shipping">
              <button>Procced Shipping</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
