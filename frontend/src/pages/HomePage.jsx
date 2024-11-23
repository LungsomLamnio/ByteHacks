import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shopcart</h1>
          <div className="space-x-4">
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
      <div className="bg-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold">
              Grab Upto 50% Off On Selected Headphone
            </h2>
            <p className="text-gray-700">
              Discover the best deals on high-quality headphones.
            </p>
            <button className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Headphone Promo"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto flex flex-wrap gap-2">
          <button className="bg-gray-200 px-4 py-2 rounded-md">
            Headphone Type
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Price</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Review</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Color</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Material</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Offer</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">
            All Filters
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Headphones For You!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product Card */}
          {[1, 2, 3, 4].map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold">Wireless Earbuds, IPX8</h3>
              <p className="text-gray-500">Organic Cotton, Earcups Certified</p>
              <p className="text-green-700 font-bold text-lg">$89.00</p>
              <button className="bg-green-700 text-white w-full py-2 rounded-lg mt-2 hover:bg-green-800">
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
