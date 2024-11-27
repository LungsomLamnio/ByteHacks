import React, { useState } from "react";

const SellerDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productImageUrls, setProductImageUrls] = useState([]);
  const [sellerId, setSellerId] = useState("6746284c93282345b9cf67e9"); // Replace with actual seller ID logic

  // Function to handle adding a product
  const addProduct = async () => {
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
        console.log("Product added:", data);
        // Reset form or update UI here if necessary
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductCategory("");
        setProductStock("");
        setProductImageUrls([]);
      } else {
        console.error("Error adding product:", data.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Handle image URL input change
  const handleImageUrlsChange = (e) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setProductImageUrls(urls);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          addProduct(); // Trigger the addProduct function on form submission
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price (₹)"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
        />
        <textarea
          placeholder="Image URLs (comma-separated)"
          value={productImageUrls.join(", ")}
          onChange={handleImageUrlsChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default SellerDashboard;
