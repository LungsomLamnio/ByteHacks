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
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <p className="text-lg mt-2">
          Streamline Your Product Management Experience
        </p>
      </header>

      {/* Add Product Section */}
      <section className="max-w-4xl mx-auto my-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            addProduct();
          }}
        >
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              required
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <textarea
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            rows="3"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            required
          ></textarea>
          <div className="flex gap-4 items-center">
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
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </section>

      {/* Your Products Section */}
      {products.length > 0 && (
        <section className="max-w-4xl mx-auto my-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Products</h2>
          <ul className="space-y-4">
            {products.map((product, index) => (
              <li
                key={index}
                className="p-4 border rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
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
  );
};

export default SellerDashboard;
