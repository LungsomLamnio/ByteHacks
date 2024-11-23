const container = document.getElementById('container');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

// Add event listener for login button to show login form
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Add event listener for register button to show registration form
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
