import { useRouter } from "next/router";
import { useCart } from "../../context/CartContext";

const products = [
    { id: 'one', name: 'Romantic Florals', price: 10, image: '/Shorts/Black.webp', description: 'Description for Product 1' },
    { id: 'two', name: 'Romantic Florals', price: 20, image: '/Shorts/Black2.webp', description: 'Description for Product 2' },
    { id: 'three', name: 'Romantic Florals', price: 40, image: '/Shorts/Black3.webp', description: 'Description for Product 3' },
    { id: 'four', name: 'Romantic Florals', price: 60, image: '/Shorts/Black3.webp', description: 'Description for Product 4' },
  ];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Получаем ID товара из URL
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-500 mb-4">Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
