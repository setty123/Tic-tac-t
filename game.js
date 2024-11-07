document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const roundDisplays = document.querySelectorAll("#roundDisplay");
    const restartButton = document.querySelector(".restart");
    const popup = document.getElementById("winnerPopup");
    const winnerText = document.getElementById("winnerText");
    const playAgainButton = document.getElementById("playAgainButton");
    const winnersList = document.getElementById("winnersList");
    const container4 = document.querySelector('.container4');
    const showHistoryLink = document.getElementById("showHistory");
    const historyPopup = document.getElementById("historyPopup");
    const closeHistoryLink = document.getElementById("closeHistoryLink");

    const firstPlayerName = localStorage.getItem("firstPlayerName") || "Naruto";
    const secondPlayerName = localStorage.getItem("secondPlayerName") || "Uzumaki";


    const player1 = { name: firstPlayerName, symbol: 'X' };
    const player2 = { name: secondPlayerName, symbol: 'O' };

    let currentPlayer = player1; 
    let gameActive = true;
    let board = Array(9).fill(null);
    let round = 1;


    const displayFirsts = document.querySelectorAll("#displayFirst");
    const displaySeconds = document.querySelectorAll("#displaySecond");
    const chevronFirsts = document.querySelectorAll("#chevronFirst");
    const chevronSeconds = document.querySelectorAll("#chevronSecond");

    displayFirsts.forEach(display => display.textContent = player1.name);
    displaySeconds.forEach(display => display.textContent = player2.name);

    function initializeGame() {
        boxes.forEach(box => {
            box.textContent = '';
            box.style.backgroundColor = ''; 
        });
        board.fill(null);
        currentPlayer = player1;
        updateDisplay();
        gameActive = true;
        popup.style.display = 'none';
        container4.classList.remove('blur');
        restartButton.style.display = 'none'; 
    }

    function updateDisplay() {
        roundDisplays.forEach(display => {
            display.textContent = `Round ${round}`;
        });

        displayFirsts.forEach(displayFirst => {
            displayFirst.style.color = currentPlayer === player1 ? '#FF8C00' : '#C0C0C0';
            displayFirst.style.fontWeight = currentPlayer === player1 ? 'bold' : 'normal';
        });

        displaySeconds.forEach(displaySecond => {
            displaySecond.style.color = currentPlayer === player2 ? '#FF8C00' : '#C0C0C0';
            displaySecond.style.fontWeight = currentPlayer === player2 ? 'bold' : 'normal';
        });

        chevronFirsts.forEach(chevronFirst => {
            chevronFirst.style.display = currentPlayer === player1 ? 'inline' : 'none';
        });

        chevronSeconds.forEach(chevronSecond => {
            chevronSecond.style.display = currentPlayer === player2 ? 'inline' : 'none';
        });
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                pattern.forEach(index => boxes[index].style.backgroundColor = "#036570");
                return board[a];
            }
        }
        return null;
    }

    function handleBoxClick(event) {
        if (!gameActive || event.target.textContent) return;

        const id = event.target.id;
        board[id] = currentPlayer.symbol;
        event.target.textContent = currentPlayer.symbol;
        restartButton.style.display = 'block'; 

        const winner = checkWinner();
        if (winner) {
            gameActive = false;
            addWinnerToHistory(currentPlayer.name);
            winnerText.textContent = `${currentPlayer.name} wins!`;
            popup.style.display = 'block';
            container4.classList.add('blur');
            return;
        }

        if (!board.includes(null)) {
            gameActive = false;
            addWinnerToHistory("Draw match brooo");
            winnerText.textContent = "Draw match broooo!";
            popup.style.display = 'block';
            container4.classList.add('blur');
            return;
        }

        currentPlayer = currentPlayer === player1 ? player2 : player1;
        updateDisplay();
    }

    function addWinnerToHistory(winner) {   
        const listItem = document.createElement('li');
        listItem.textContent = winner;
        winnersList.insertBefore(listItem, winnersList.firstChild);

        const historyListItem = document.createElement('li');
        historyListItem.textContent = winner;
        historyPopup.querySelector('#winnersList').insertBefore(historyListItem, historyPopup.querySelector('#winnersList').firstChild);
    }

    function restartGame() {
        initializeGame();
    }

    function nextRound() {
        round++;
        updateDisplay();
        initializeGame();
    }

    function toggleHistoryPopup() {
        historyPopup.style.display = historyPopup.style.display === 'none' ? 'block' : 'none';
        container4.classList.add('blur');
    }

    boxes.forEach(box => box.addEventListener("click", handleBoxClick));
    restartButton.addEventListener("click", restartGame);
    playAgainButton.addEventListener("click", nextRound);
    showHistoryLink.addEventListener("click", (event) => {
        event.preventDefault();
        toggleHistoryPopup();
    });

    closeHistoryLink.addEventListener("click", (event) => {
        event.preventDefault(); 
        historyPopup.style.display = 'none';
        container4.classList.remove('blur');
    });

    initializeGame();
});
