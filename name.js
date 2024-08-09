const proceedButton = document.querySelector(".proceed");
const firstPlayer = document.getElementById("input1");
const secondPlayer = document.getElementById("input2");

proceedButton.addEventListener("click", function() {
    const firstPlayerName = firstPlayer.value;
    const secondPlayerName = secondPlayer.value;
    
    localStorage.setItem("firstPlayerName", firstPlayerName);
    localStorage.setItem("secondPlayerName", secondPlayerName);

    window.location.href = "game.html";
});