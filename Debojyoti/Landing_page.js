const sellerButton = document.getElementById('sellerButton');
const buyerButton = document.getElementById('buyerButton');

// Redirect to seller page
sellerButton.addEventListener('click', () => {
    window.location.href = "Seller_login.html"; // Replace with the actual seller page URL
});

// Redirect to buyer page
buyerButton.addEventListener('click', () => {
    window.location.href = "Buyer_login.html"; // Replace with the actual buyer page URL
});
