import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Naga Handwoven Table Mat and Runner",
      description:
        "Handwoven table runners and mats by Nagaland's tribal women, reflecting rich heritage.",
      price: "₹1,800.00", // Converted to INR
      image: "/NagaHandwovenTableMat.jpeg", // Correct public folder path
    },
    {
      id: 2,
      name: "White Mulberry Silk Traditional Mekhla Chador",
      description:
        "Handloom Assamese Mekhla Chador: a traditional two-piece attire of skirt and shawl.",
      price: "₹22,000.00", // Converted to INR
      image: "/WhiteMulberrySilkTraditionalMekhlaChador.jpeg",
    },
    {
      id: 3,
      name: "Lek Vaikong - Traditional Karbi Necklace",
      description:
        "Lek Vaikong: a traditional Karbi necklace symbolizing their vibrant culture and pride.",
      price: "₹449.00", // Converted to INR
      image: "/TraditionalKarbiNecklace.jpeg",
    },
    {
      id: 4,
      name: "Dimasa - Risa Rimai - Muffler",
      description:
        "Handwoven Dimasa muffler featuring vibrant patterns and rich tribal heritage.",
      price: "₹1,599.00", // Converted to INR
      image: "/DimasaMuffler.jpeg",
    },
    {
      id: 5,
      name: "Handcrafted Warli Art Terracotta Pot with a lid",
      description:
        "Terracotta pot with lid, featuring intricate Warli art that celebrates tribal culture.",
      price: "₹999.00", // Converted to INR
      image: "/HandcraftedPot.jpeg",
    },
    {
      id: 6,
      name: "Byopa: Tradtional Headgear of Nyishi Tribe",
      description:
        "Traditional Nyishi headgear of Arunachal symbolizing cultural pride and heritage",
      price: "₹5,000.00", // Converted to INR
      image: "/Byopa.webp",
    },
    {
      id: 7,
      name: "Jaapi: The Headgear That Represents Assam",
      description:
        "A traditional Assamese bamboo hat with vibrant patterns, symbolizing cultural pride",
      price: "₹449.00", // Converted to INR
      image: "/Jaapi.jpeg",
    },
    {
      id: 8,
      name: "Dhaka Topi",
      description:
        "The Dhaka Topi is a traditional Nepali hat made from the unique Dhaka fabric, symbolizing cultural pride and heritage",
      price: "₹349.00", // Converted to INR
      image: "/DhakaTopi.jpeg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="flex justify-between items-center w-full px-6 xl:px-12">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold">EthniCrafts</h1>

          {/* Search Box */}
          <div className="relative flex-grow mx-4">
            {/* Magnifying Glass Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 015.29 13.29l4.11 4.11a1 1 0 01-1.42 1.42l-4.11-4.11A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
            </svg>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 p-3 rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-green-500 bg-white"
            />
          </div>

          {/* Navigation Links */}
          <div className="space-x-2 md:space-x-4 text-sm md:text-base">
            <a href="/" className="hover:underline text-white">
              Categories
            </a>
            <a href="/" className="hover:underline text-white">
              My Profile
            </a>
            {/* Link to Artisans Bio */}
            <Link to="/artisans-bio" className="hover:underline text-white">
              Artisans
            </Link>
            {/* Link to Seller Dashboard */}
            <Link to="/seller-dashboard" className="hover:underline text-white">
              Become a seller
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-50 w-full py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 lg:px-12">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              Grab Upto 50% Off On Selected Potteries
            </h2>
            <p className="text-gray-700 text-lg">
              Discover unique, handcrafted products by local artisans and
              support their creative journey.
            </p>
            <button className="bg-green-700 text-white py-3 px-8 rounded-lg hover:bg-green-800 text-lg">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/LA_Hero.png"
              alt="Headphone Promo"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-8 px-6 xl:px-12 w-full bg-green-50 flex-grow">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center md:text-left text-green-800">
          Products For You!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded-md bg-gray-200"
              />

              <h3 className="mt-4 text-lg font-bold text-black">
                {product.name}
              </h3>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-green-700 font-bold text-xl">
                {product.price}
              </p>
              <button className="bg-green-700 text-white w-full py-3 rounded-lg mt-4 hover:bg-green-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 xl:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} EthniCrafts. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:underline text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
