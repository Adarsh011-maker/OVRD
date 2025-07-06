import { Card, CardContent } from "../components/ui/card";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Shop the Drop</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {["Dose Tee", "Overdose Midnight", "Echo Oversized"].map((item, idx) => (
          <Card key={idx} className="bg-zinc-800 rounded-xl shadow-md">
            <CardContent className="p-6">
              <div className="h-60 bg-zinc-700 mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="text-gray-400 text-sm">240 GSM / 100% Cotton</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
