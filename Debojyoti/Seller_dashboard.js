// DOM Elements
const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");
const addProductButton = document.getElementById("addProductButton");
const publishButton = document.getElementById("publishButton");
const productSection = document.getElementById("productSection");

// Event Listener for Adding Products
addProductButton.addEventListener("click", () => {
    const productName = document.getElementById("productName").value.trim();
    const productDescription = document.getElementById("productDescription").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    const productImages = document.getElementById("productImages").files;

    // Validation
    if (productName && productDescription && productPrice && productImages.length > 0) {
        // Preview Product Images
        const imagePreviews = Array.from(productImages).map((image) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            return new Promise((resolve) => {
                reader.onload = () => resolve(reader.result);
            });
        });

        Promise.all(imagePreviews).then((images) => {
            const productId = Date.now(); // Unique ID for each product

            // Create Product Card
            const productHTML = `
                <li data-id="${productId}">
                    <div class="product-images">
                        ${images.map(img => `<img src="${img}" alt="${productName}" />`).join('')}
                    </div>
                    <div class="product-details">
                        <h3>${productName}</h3>
                        <p>${productDescription}</p>
                        <p><strong>Price:</strong> ₹${productPrice}</p>
                    </div>
                    <button class="delete-btn" onclick="deleteProduct(${productId})">Delete</button>
                </li>
            `;

            productList.insertAdjacentHTML("beforeend", productHTML);

            // Show 'Your Products' Section and Publish Button
            productSection.classList.remove("hidden");
            togglePublishButton();

            // Reset the form
            productForm.reset();
        });
    } else {
        alert("Please fill out all fields and upload at least one image!");
    }
});

// Function to Delete Product
function deleteProduct(productId) {
    const productItem = document.querySelector(`li[data-id="${productId}"]`);
    if (productItem) {
        productList.removeChild(productItem);
        togglePublishButton(); // Hide Publish button if no products remain
    }
}

// Function to Toggle Publish Button Visibility
function togglePublishButton() {
    if (productList.children.length > 0) {
        publishButton.classList.remove("hidden");
    } else {
        publishButton.classList.add("hidden");
        if (productList.children.length === 0) {
            productSection.classList.add("hidden"); // Hide "Your Products" if no items
        }
    }
}

// Event Listener for Publish Button
publishButton.addEventListener("click", () => {
    alert("Products published successfully!");
});
