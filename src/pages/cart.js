import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold">Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}
