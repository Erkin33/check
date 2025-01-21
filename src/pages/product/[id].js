import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const products = [
  { id: "one", name: "Romantic Florals", price: 10, image: "/Shorts/Black.webp", description: "Description for Product 1" },
  { id: "two", name: "Romantic Florals", price: 20, image: "/Shorts/black2.webp", description: "Description for Product 2" },
  { id: "three", name: "Romantic Florals", price: 40, image: "/Shorts/black3.webp", description: "Description for Product 3" },
  { id: "four", name: "Romantic Florals", price: 60, image: "/Shorts/black3.webp", description: "Description for Product 4" },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // Состояние для количества

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  // Рассчитываем общую цену
  const totalPrice = (quantity * product.price).toFixed(2);

  // Обработка изменения количества
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1); // Минимум 1
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-500 mb-4">
        Price: <span className="font-semibold">${totalPrice}</span> {/* Динамическая цена */}
      </p>
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="border px-2 py-1 w-20 text-center"
          min="1"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
