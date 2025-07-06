import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function ShopPage() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Dose Tee", price: "₹999" },
    { id: 2, name: "Overdose Midnight", price: "₹1,199" },
    { id: 3, name: "Echo Oversized", price: "₹1,099" },
  ];

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Shop the Drop</h1>
        <div className="text-white text-lg">
          🛒 Cart: {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-800 text-white rounded-2xl shadow-md">
            <CardContent className="p-6">
              <div className="h-64 bg-zinc-700 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4">240 GSM / 100% Cotton</p>
              <p className="text-white text-md font-bold mb-4">{product.price}</p>
              <Button
                className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-xl"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
