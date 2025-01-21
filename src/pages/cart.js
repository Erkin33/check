"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cart() {
  const { cart, updateCartItemQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((total, item) => total + (item.totalPrice || 0), 0); // Default to 0 if totalPrice is undefined

  const handleCheckout = () => {
    router.push("/checkout"); // Перенаправление на страницу оформления заказа
  };

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (quantity > 0) {
      updateCartItemQuantity(id, quantity);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 border-b">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div className="flex-1">
                  <span className="block">{item.name}</span>
                  <div className="flex items-center mt-2">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="border px-2 py-1 w-20 text-center"
                      min="1"
                    />
                  </div>
                </div>
                <span>${(item.totalPrice || 0).toFixed(2)}</span> {/* Safely display totalPrice */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold">Total: ${(totalPrice || 0).toFixed(2)}</h2> {/* Safely display totalPrice */}
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
