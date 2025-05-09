
// EMBRO Homepage (React + Tailwind CSS)
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Embroidered Shirt #1",
    image: "https://via.placeholder.com/300x400",
    originalPrice: 999,
    discountedPrice: 599,
  },
  {
    id: 2,
    name: "Embroidered Shirt #2",
    image: "https://via.placeholder.com/300x400",
    originalPrice: 999,
    discountedPrice: 599,
  },
  {
    id: 3,
    name: "Embroidered Shirt #3",
    image: "https://via.placeholder.com/300x400",
    originalPrice: 999,
    discountedPrice: 599,
  },
  {
    id: 4,
    name: "Embroidered Shirt #4",
    image: "https://via.placeholder.com/300x400",
    originalPrice: 999,
    discountedPrice: 599,
  },
  {
    id: 5,
    name: "Embroidered Shirt #5",
    image: "https://via.placeholder.com/300x400",
    originalPrice: 999,
    discountedPrice: 599,
  },
  {
    id: 6,
    name: "Embroidered Shirt #6",
    image: "https://via.placeholder.com/300x400",
    originalPrice: 999,
    discountedPrice: 599,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-yellow-600 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <span className="text-black">EM</span>
          <span className="text-gray-700">BRO</span>
        </h1>
        <nav className="space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#products" className="text-white">Products</a>
          <a href="https://wa.me/919864709074" className="text-white" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-semibold mb-4">Unique Embroidered Shirts for Men</h2>
        <p className="text-white text-lg">Starting at just ₹599</p>
      </section>

      {/* Product Grid */}
      <section id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-2xl shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
            <div className="flex items-center space-x-2 text-lg">
              <span className="line-through text-red-500">₹{product.originalPrice}</span>
              <span className="text-green-600 font-semibold">₹{product.discountedPrice}</span>
            </div>
            <p className="mt-1 text-sm">Unique embroidery shirt for men.</p>
            <a
              href={`https://wa.me/919864709074?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              <FaWhatsapp className="mr-2" /> Order on WhatsApp
            </a>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-white py-6 mt-10 border-t border-white/30">
        <p>&copy; 2025 EMBRO. All rights reserved.</p>
      </footer>
    </div>
  );
}
