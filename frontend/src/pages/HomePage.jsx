import React from "react";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds, IPX8",
      description: "Organic Cotton, Earcups Certified",
      price: "$89.00",
      image: "./public/HWS.avif", // Replace with actual product image URL
    },
    {
      id: 2,
      name: "Handmade Pottery",
      description: "Traditional Clay Pots, Handcrafted",
      price: "$59.00",
      image: "./public/HMHD.jpg", // Replace with actual product image URL
    },
    {
      id: 3,
      name: "Woven Basket",
      description: "Eco-friendly Handmade Wicker Basket",
      price: "$39.00",
      image: "./public/HWB.jpeg", // Replace with actual product image URL
    },
    {
      id: 4,
      name: "Artisanal Jewelry",
      description: "Handcrafted Silver Necklace",
      price: "$120.00",
      image: "./public/PAVA.jpg", // Replace with actual product image URL
    },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="flex justify-between items-center w-full px-6 xl:px-12">
          <h1 className="text-xl md:text-2xl font-bold">Shopcart</h1>
          <div className="space-x-2 md:space-x-4 text-sm md:text-base">
            <a href="/" className="hover:underline text-white">
              Categories
            </a>
            <a href="/" className="hover:underline text-white">
              Deals
            </a>
            <a href="/" className="hover:underline text-white">
              What's New
            </a>
            <a href="/" className="hover:underline text-white">
              Delivery
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-green-50 w-full py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 lg:px-12">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              Grab Upto 50% Off On Selected Headphones
            </h2>
            <p className="text-gray-700 text-lg">
              Discover the best deals on high-quality headphones and elevate
              your listening experience.
            </p>
            <button className="bg-green-700 text-white py-3 px-8 rounded-lg hover:bg-green-800 text-lg">
              Buy Now
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="./public/LA_Hero.png"
              alt="Headphone Promo"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 py-4 bg-green-50">
        <div className="flex flex-wrap gap-2 justify-center px-6 xl:px-12 w-full">
          <button className="bg-green-550 text-white px-4 py-3 rounded-md text-sm md:text-base">
            Handmade Products
          </button>
          <button className="bg-green-550 text-white px-4 py-3 rounded-md text-sm md:text-base">
            Pottery
          </button>
          <button className="bg-green-550 text-white px-4 py-3 rounded-md text-sm md:text-base">
            Jewelry
          </button>
          <button className="bg-green-550 text-white px-4 py-3 rounded-md text-sm md:text-base">
            Art
          </button>
          <button className="bg-green-550 text-white px-4 py-3 rounded-md text-sm md:text-base">
            All Filters
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-8 px-6 xl:px-12 w-full bg-green-50">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Products For You!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
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
    </div>
  );
};

export default HomePage;
