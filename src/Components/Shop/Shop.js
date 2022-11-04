import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getstoredcarddata,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [cart, setcart] = useState([]);
  const [page, setpage] = useState(0);
  const [size, setsize] = useState(10);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setcount(data.count);
        setproducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const clearCart = () => {
    setcart([]);
    deleteShoppingCart();
  };

  const clickHundlecart = (selectedproduct) => {
    const exists = cart.find((product) => product._id === selectedproduct._id);
    let newcart = [];
    if (!exists) {
      selectedproduct.quantity = 1;
      newcart = [...cart, selectedproduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedproduct._id
      );
      exists.quantity = exists.quantity + 1;
      newcart = [...rest, exists];
    }

    setcart(newcart);
    addToDb(selectedproduct._id);
  };
  useEffect(() => {
    const storeddata = getstoredcarddata();
    const savecart = [];
    const ids = Object.keys(storeddata);

    fetch("http://localhost:5000/productsbyID", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storeddata) {
          const addedproduct = data.find((product) => product._id === id);
          if (addedproduct) {
            const quantity = storeddata[id];
            addedproduct.quantity = quantity;
            savecart.push(addedproduct);
          }
        }
        setcart(savecart);
      });
  }, [products]);

  return (
    <div className="shop-container">
      <div className="prooducts-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            Hundleaddtocart={clickHundlecart}
          ></Product>
        ))}
      </div>
      <div className="details-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/orders">
            <button>Review Orders</button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <p>
          currently select page : {page} and Size : {size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={page === number && "selected"}
            onClick={() => setpage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select onChange={(event) => setsize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
