import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getstoredcarddata } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setcart] = useState([]);

  const clickHundlecart = (selectedproduct) => {
    console.log(selectedproduct);
    const exists = cart.find((product) => product.id === selectedproduct.id);
    let newcart = [];
    if (!exists) {
      selectedproduct.quantity = 1;
      newcart = [...cart, selectedproduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedproduct.id);
      exists.quantity = exists.quantity + 1;
      newcart = [...rest, exists];
    }

    setcart(newcart);
    addToDb(selectedproduct.id);
  };
  useEffect(() => {
    const storeddata = getstoredcarddata();
    const savecart = [];
    for (const id in storeddata) {
      const addedproduct = products.find((product) => product.id === id);
      if (addedproduct) {
        const quantity = storeddata[id];
        addedproduct.quantity = quantity;
        savecart.push(addedproduct);
      }
    }
    setcart(savecart);
  }, [products]);

  return (
    <div className="shop-container">
      <div className="prooducts-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            Hundleaddtocart={clickHundlecart}
          ></Product>
        ))}
      </div>
      <div className="details-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
