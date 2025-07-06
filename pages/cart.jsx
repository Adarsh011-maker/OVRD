import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-2xl mx-auto">
          {cartItems.map((item, idx) => (
            <div key={idx} className="bg-zinc-800 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">₹{item.price}</p>
              </div>
              <Button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600"
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="text-right text-2xl font-bold mt-6">
            Total: ₹{total}
          </div>
        </div>
      )}
    </main>
  );
}
