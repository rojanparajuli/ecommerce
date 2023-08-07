
  
  function setRandomBackgroundImage() {
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var randomImage = backgroundImages[randomIndex];
    document.body.style.backgroundImage = "url('" + randomImage + "')"; //apple
  }
  
  setRandomBackgroundImage();
  
  function togglePassword(inputId, icon) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }
  
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.getElementById("gender").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Registration successful!");
      document.getElementById("registrationForm").reset();
      window.location.href = "thanks.html"; 
    }
  });
  