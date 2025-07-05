import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          DROP 01: The Dose Begins
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-6 text-gray-400"
        >
          More Than Enough. Wear Your Overdose.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-lg font-semibold rounded-2xl shadow-xl">
            Shop the Drop <MoveRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Drop Preview */}
      <section className="py-16 px-4 md:px-20 bg-zinc-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Latest Drops</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['The Dose Tee', 'Midnight Overdose', 'Oversized Echo'].map((title, idx) => (
            <Card key={idx} className="bg-zinc-800 text-white rounded-2xl shadow-md">
              <CardContent className="p-6">
                <div className="h-64 bg-zinc-700 rounded-xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">Oversized / 240 GSM / 100% Cotton</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-32 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">What is OVRD?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          OVRD (Overdose) isn’t just a clothing label. It’s a movement. It’s the space where streetwear meets self-expression, where oversized silhouettes represent bold identities.
        </p>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 md:px-32 bg-white text-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the #OVRDFamily</h2>
        <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto">
          Be part of the drop. Get early access, behind-the-scenes content, and be featured.
        </p>
        <Button className="bg-black text-white hover:bg-gray-900 px-6 py-3 text-lg font-semibold rounded-2xl">
          Sign Up Now
        </Button>
      </section>
    </main>
  );
}
