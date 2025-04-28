const proceedButton = document.querySelector(".proceed");
const firstPlayer = document.getElementById("input1");
const secondPlayer = document.getElementById("input2");

function checkInputs() {
    if (firstPlayer.value.trim() && secondPlayer.value.trim()) {
        proceedButton.classList.add("show");
    } else {
        proceedButton.classList.remove("show");
    }
}

firstPlayer.addEventListener("input", checkInputs);
secondPlayer.addEventListener("input", checkInputs);

proceedButton.addEventListener("click", function() {
    const firstPlayerName = firstPlayer.value;
    const secondPlayerName = secondPlayer.value;

    localStorage.setItem("firstPlayerName", firstPlayerName);
    localStorage.setItem("secondPlayerName", secondPlayerName);

    window.location.href = "game.html";
});
