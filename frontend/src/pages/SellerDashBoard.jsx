import React, { useState } from "react";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]);

  const addProduct = () => {
    if (
      !productName ||
      !productPrice ||
      !productDescription ||
      productImages.length === 0
    ) {
      alert("Please fill in all fields and upload images.");
      return;
    }

    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      images: productImages,
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductImages([]);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setProductImages(files);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col w-screen">
      {/* Header */}
      <header className="bg-green-700 text-white py-8 w-full">
        <div className="px-6">
          <h1 className="text-3xl font-bold text-center">Seller Dashboard</h1>
          <p className="text-lg text-center mt-2">
            Streamline Your Product Management Experience
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-green-50 py-12 w-full">
        <div className="px-6">
          {/* Add Product Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
              Add Product
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                addProduct();
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                  required
                />
                <input
                  type="number"
                  placeholder="Price (₹)"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                  required
                />
              </div>
              <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                rows="3"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                required
              ></textarea>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <input
                  type="file"
                  id="productImages"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full md:w-auto"
                >
                  Add Product
                </button>
              </div>
            </form>
          </section>

          {/* Your Products Section */}
          {products.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-lg w-full text-black">
              <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
                Your Products
              </h2>
              <ul className="space-y-4">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                      <p className="text-green-700 font-bold">{`₹${product.price}`}</p>
                    </div>
                    <div className="flex gap-2">
                      {product.images.map((image, idx) => (
                        <img
                          key={idx}
                          src={URL.createObjectURL(image)}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-6">
                <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
                  Publish All Products
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 w-full">
        <div className="px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} EthniCrafts. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SellerDashboard;
