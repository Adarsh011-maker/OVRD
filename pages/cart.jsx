import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 bg-zinc-800 rounded-xl">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-400">₹{item.price}</p>
              <Button
                className="mt-2 bg-red-500 hover:bg-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="mt-6 text-xl font-bold">Total: ₹{total}</div>
        </div>
      )}
    </main>
  );
}
