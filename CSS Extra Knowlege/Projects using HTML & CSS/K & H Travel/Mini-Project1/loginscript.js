document.getElementById("wrapper").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // You can replace the condition with your actual login logic
    if (username === "admin" && password === "admin") {
        // Redirect to another page
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
})