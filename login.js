document.addEventListener("DOMContentLoaded", function() {
    // Select the relevant elements
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.querySelector(".cbox input");

    // Predefined valid credentials
    const validEmail = "srujan@gmail.com";
    const validPassword = "1234";

    // Function to handle login validation
    window.auth = function() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "") {
            alert("Please enter your email.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        // Check if the entered credentials are correct
        if (username === validEmail && password === validPassword) {
            // Redirect to mode.html
            window.location.href = "mode.html";
        } else {
            // Show error message
            if (username !== validEmail) {
                alert("Wrong email.");
            } else {
                alert("Wrong password.");
            }
        }
    };

    // Function to toggle password visibility
    passwordInput.type = "password";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});
