// Add your JavaScript code here
// Add event listener to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Cart items
const cartItems = [];

// Add product to cart
function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const name = product.querySelector('h3').innerText;
  const price = parseFloat(button.dataset.price);

  cartItems.push({ name, price });
  updateCart();
}

// Update cart
function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.name} - Rs${item.price}`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  const totalElement = document.getElementById('total');
  totalElement.innerText = `Total: Rs.${total.toFixed(2)}`;
}

// Add event listener to the "Checkout" button
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', redirectToPayment);

// Redirect to payment.html
function redirectToPayment() {
  window.location.href = 'payment.html';
}
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
// Sample product data for demonstration purposes
// Sample product data for demonstration purposes
const products = [
  "earphone",
  "iphone",
  "vivo",
  "oppo A7",
  "laptop",
  "mouse",
];


const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");

// Function to display search suggestions
function showSuggestions() {
  const inputValue = searchInput.value.toLowerCase();
  const matchedProducts = products.filter((product) =>
    product.toLowerCase().includes(inputValue)
  );

  // Clear previous suggestions
  searchSuggestions.innerHTML = "";

  // Display matched suggestions
  matchedProducts.forEach((product) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = product;
    suggestionItem.classList.add("suggestion-item");
    searchSuggestions.appendChild(suggestionItem);
  });
}

// Event listener for input change in the search box
searchInput.addEventListener("input", () => {
  showSuggestions();
});

// Event listener to hide suggestions when clicking outside the search box
document.addEventListener("click", (event) => {
  if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
    searchSuggestions.innerHTML = "";
  }
});
