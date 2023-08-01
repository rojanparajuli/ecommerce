const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

const cartItems = [];

function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const name = product.querySelector('h3').innerText;
  const price = parseFloat(button.dataset.price);

  // Check if the item is already in the cart
  const existingItem = cartItems.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.name} x ${item.quantity} - Rs.${(item.price * item.quantity).toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price * item.quantity;
  });

  const totalElement = document.getElementById('total');
  totalElement.innerText = `Total: Rs.${total.toFixed(2)}`;

  // Update cart icon notification
  const cartIcon = document.querySelector('.cart-icon');
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  cartIcon.dataset.count = cartItemCount;
}

const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', redirectToPayment);

function redirectToPayment() {
  if (cartItems.length > 0) {
    window.location.href = 'payment.html';
  } else {
    alert('Please choose items before proceeding to checkout.');
  }
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

function showSuggestions() {
  const inputValue = searchInput.value.toLowerCase();
  const matchedProducts = products.filter((product) =>
    product.toLowerCase().includes(inputValue)
  );

  searchSuggestions.innerHTML = "";

  matchedProducts.forEach((product) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = product;
    suggestionItem.classList.add("suggestion-item");
    searchSuggestions.appendChild(suggestionItem);
  });
}

let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(showSuggestions, 300);
});

document.addEventListener("click", (event) => {
  if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
    searchSuggestions.innerHTML = "";
  }
});
