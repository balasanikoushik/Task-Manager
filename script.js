document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if login is valid (you can replace this with your own validation logic)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        // Redirect to the task manager HTML page
        window.location.href ="./task manager/index.html";
    } else {
        // Display an error message
        document.getElementById("message").textContent = "Invalid username or password";
    }
});