document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    this.reset();
  
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = "Registration successful!";
    document.body.appendChild(popup);
    popup.classList.add("show");
    setTimeout(function () {
      popup.classList.remove("show");
      document.body.removeChild(popup);
    }, 3000);
  
  });
  