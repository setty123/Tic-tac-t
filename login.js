document.addEventListener("DOMContentLoaded", function() {

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.querySelector(".cbox input");


    const validEmail = "srujan@gmail.com";
    const validPassword = "1234";


    window.auth = function() {
        const username = usernameInput.value.trim();
        console.log(username,"username")
        const password = passwordInput.value.trim();

        if (username === "") {
            alert("Please enter your email.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }


        if (username === validEmail && password === validPassword) {
            window.location.href = "mode.html";
        } else {
            if (username !== validEmail) {
                alert("Wrong email.");
            } else {
                alert("Wrong password.");
            }
        }
    };

    passwordInput.type = "password";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});
