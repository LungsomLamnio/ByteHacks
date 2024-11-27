import React, { useState } from "react";

const SellerDashboard = () => {
  const [sellerId, setSellerId] = useState(""); // Input for seller ID
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productImageUrls, setProductImageUrls] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const addProduct = async () => {
    if (!sellerId.trim()) {
      alert("Seller ID is required to add a product.");
      return;
    }

    const formData = {
      name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
      stock: productStock,
      seller: sellerId,
      images: productImageUrls, // An array of image URLs
    };

    try {
      const response = await fetch("http://localhost:5001/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Product added successfully!");
        console.log("Product added:", data);
        // Reset form
        resetForm();
      } else {
        console.error("Error response:", data);
        alert(`Failed to add product: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  const resetForm = () => {
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductCategory("");
    setProductStock("");
    setProductImageUrls([]);
  };

  const addCategory = () => {
    if (!newCategory.trim()) {
      alert("Please enter a valid category name.");
      return;
    }

    if (categories.includes(newCategory.trim())) {
      alert("Category already exists.");
      return;
    }

    setCategories([...categories, newCategory.trim()]);
    setNewCategory("");
  };

  const handleImageUrlsChange = (e) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setProductImageUrls(urls);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col w-screen">
      <header className="bg-green-700 text-white py-8 w-full">
        <div className="px-6">
          <h1 className="text-3xl font-bold text-center">Seller Dashboard</h1>
          <p className="text-lg text-center mt-2">
            Streamline Your Product Management Experience
          </p>
        </div>
      </header>

      <main className="flex-grow bg-green-50 py-12 w-full">
        <div className="px-6">
          {/* Seller ID Input Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
              Enter Seller ID
            </h2>
            <input
              type="text"
              placeholder="Enter your Seller ID"
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
              required
            />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
              Manage Categories
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                addCategory();
              }}
            >
              <input
                type="text"
                placeholder="Add New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                required
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full md:w-auto"
              >
                Add Category
              </button>
            </form>
            {categories.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">
                  Available Categories:
                </h3>
                <ul className="list-disc pl-5">
                  {categories.map((category, index) => (
                    <li key={index} className="text-gray-800">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

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
              <input
                type="number"
                placeholder="Stock Quantity"
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                required
              />
              <textarea
                placeholder="Image URLs (comma-separated)"
                value={productImageUrls.join(", ")}
                onChange={handleImageUrlsChange}
                rows="2"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                required
              ></textarea>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-white text-black"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full md:w-auto"
              >
                Add Product
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 w-full">
        <div className="px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            ©️ {new Date().getFullYear()} EthniCrafts. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SellerDashboard;
