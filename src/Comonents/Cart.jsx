import React from "react";
import { useCart } from "../CartContext/Context";

const Cart = () => {
  const { handleToggle, handleAdd, handleMinus, cart,removeProduct } = useCart();

  return (
    <div className="fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg z-50 overflow-y-auto">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          className="text-gray-600 text-xl font-semibold hover:text-gray-800"
          onClick={handleToggle}
        >
          &times;
        </button>
      </div>

      {/* Cart Title */}
      <h2 className="md:text-2xl font-bold mb-6 text-gray-700 text-center">Shopping Cart</h2>

      {/* Cart Items */}
      <div className="px-6">
        <div className="flex flex-col gap-6">
          {/* Cart Item */}
          {cart &&
            cart.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col lg:flex-row gap-y-4 md:justify-around items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="md:text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 text-gray-700 px-2 md:px-3 py-1 rounded-lg font-bold"
                        
                      >
                        -
                      </button>
                      <span className="text-lg">{product.quantity}</span>
                      <button
                        className="bg-gray-200 text-gray-700 px-2 md:px-3 py-1 rounded-lg"
                        onClick={() => handleAdd(product.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-lg font-semibold text-gray-800">
                      ${product.price * product.quantity}
                    </div>

                    {/* Remove button */}
                    <button className="text-red-500 font-semibold hover:text-red-700" onClick={()=>removeProduct(product.id)}>
                      &times;
                    </button>
                  </div>
                </div>
              );
            })}
          {/* End of Cart Item */}
        </div>
        <hr />
        {/* Cart Summary */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Subtotal</h3>
            <span className="text-xl font-bold text-gray-800">
              ${cart.reduce((total, product) => total + product.price * product.quantity, 0)}
            </span>
          </div>
          <p className="text-gray-600 mt-2">
            Shipping and taxes calculated at checkout.
          </p>
          <button className="w-full px-1 bg-red-600 text-white py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-red-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
