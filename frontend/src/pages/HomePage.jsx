import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="flex justify-between items-center w-full px-6 xl:px-12">
          <h1 className="text-xl md:text-2xl font-bold">Shopcart</h1>
          <div className="space-x-2 md:space-x-4 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Categories
            </a>
            <a href="/" className="hover:underline">
              Deals
            </a>
            <a href="/" className="hover:underline">
              What's New
            </a>
            <a href="/" className="hover:underline">
              Delivery
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white px-4 md:px-8 py-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 xl:px-12">
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Grab Upto 50% Off On Selected Headphones
            </h2>
            <p className="text-gray-700 text-lg">
              Discover the best deals on high-quality headphones.
            </p>
            <button className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 text-lg">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Headphone Promo"
              className="rounded-lg shadow-md w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 py-4">
        <div className="flex flex-wrap gap-2 justify-center px-6 xl:px-12 w-full">
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            Headphone Type
          </button>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            Price
          </button>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            Review
          </button>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            Color
          </button>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            Material
          </button>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            Offer
          </button>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-sm md:text-base">
            All Filters
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-8 px-6 xl:px-12 w-full">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Headphones For You!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold">Wireless Earbuds, IPX8</h3>
              <p className="text-gray-500">Organic Cotton, Earcups Certified</p>
              <p className="text-green-700 font-bold text-xl">$89.00</p>
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
