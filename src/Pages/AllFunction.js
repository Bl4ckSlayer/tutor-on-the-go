import { useState } from "react";

const AllFunctions = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    let cart = [];
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
    cart.push(game);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(storedCart);
  };
  return [cart, setCart, addToCart];
};
export default AllFunctions;
