
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-icon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.innerHTML = "&#x1f440;";
    } else {
      passwordInput.type = "password";
      toggleIcon.innerHTML = "&#x1f441;";
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    window.location.href = "break.html";
  });
  