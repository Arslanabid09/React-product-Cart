import React from "react";
import Header from "../src/Comonents/Header";
import Card from "../src/Comonents/Card";
import { useCart } from "./CartContext/Context";
import Cart from "./Comonents/Cart";

function App() {
  const { Products,handleToggle,toggle } = useCart(); // Use a different name to avoid conflicts
  // console.log(Products);
 

  return (
    <>
          <div className="bg-slate-200 w-full min-h-screen">
            <div>
              <Header onClick={handleToggle} />
              {toggle && <Cart />}
            </div>

            <h1 className="text-2xl text-center my-10 font-semibold">Products List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mx-20 md:mx-0 ">
              {Products.map((product) => (
                <Card productss={product} key={product.id} />
              ))}
            </div>
          </div>
      
    </>
  );
}

export default App;
