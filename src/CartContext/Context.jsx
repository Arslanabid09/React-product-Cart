import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../Products";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [Products, setProducts] = useState(products);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Cart Toggle Function
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Add product to the cart
  const addToCart = (id) => {
    const productToAdd = Products.find((product) => product.id === id);
    const productInCart = cart.find((item) => item.id === id);

    if (productInCart) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newProduct = { ...productToAdd, quantity: 1 };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      let storeCount = count + 1;
      localStorage.setItem("count", JSON.stringify(storeCount));
      setCount(storeCount);
    }
  };

  // Handle Add quantity
  const handleAdd = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle Minus quantity
  const handleMinus = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeProduct = (id)=>{
   const updateCart =  cart.filter((item)=> item.id != id);
   const updateCount = count - 1
   localStorage.setItem("count", JSON.stringify(updateCount));
   localStorage.setItem("cart", JSON.stringify(updateCart));
   setCount(updateCount);
   setCart(updateCart);
  }
  // Retrieve cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedCount = JSON.parse(localStorage.getItem("count"));

    if (storedCart) {
      setCart(storedCart);
    }

    if (storedCount) {
      setCount(storedCount);
    }
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <CartContext.Provider
      value={{
        Products,
        count,
        cart,
        handleAdd,
        handleMinus,
        toggle,
        handleToggle,
        addToCart,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
