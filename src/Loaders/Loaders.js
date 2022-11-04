import { getstoredcarddata } from "../utilities/fakedb";

export const productscartloader = async () => {
  const productsdata = await fetch("http://localhost:5000/products");
  const { products } = await productsdata.json();

  //get Cart
  const savedCart = getstoredcarddata();
  const givenCart = [];
  for (const id in savedCart) {
    const addproduct = products.find((product) => product._id === id);
    if (addproduct) {
      const quantity = savedCart[id];
      addproduct.quantity = quantity;
      givenCart.push(addproduct);
    }
  }

  return { products: products, givenCart: givenCart };
};
