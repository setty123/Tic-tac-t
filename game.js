document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const roundDisplay = document.querySelector(".round1");
    const playerDisplay = document.querySelector(".which-player div");
    const restartButton = document.querySelector(".restart");
    const nextRoundButton = document.createElement("button");
    // const showHistoryLink = document.querySelector(".show-history a");
    // const historySection = document.querySelector(".history");

    let currentPlayer = 'Player 1';
    let gameActive = true;
    let board = Array(9).fill(null); // Track board state
    let round = 1; // Track the current round
    let history = []; // Track game history

    // Initialize the display
    function initializeGame() {
        boxes.forEach(box => {
            box.textContent = '';
            box.style.backgroundColor = ''; // Clear background color
        });
        board.fill(null);
        currentPlayer = 'Player 1';
        roundDisplay.textContent = `Round ${round}`;
        playerDisplay.textContent = currentPlayer;
        updatePlayerStyles();
        gameActive = true;
    }

    function updatePlayerStyles() {
        if (currentPlayer === 'Player 1') {
            playerDisplay.style.color = '#FF8C00'; 
        } else {
            playerDisplay.style.color = '#C0C0C0'; 
        }
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
                for (let j = 0; j < 3; j++) {
                    boxes[pattern[j]].style.backgroundColor = "#036570";
                }
                return board[a]; 
            }
        }
        return null;
    }

    // Handle box click
    function handleBoxClick(event) {
        if (!gameActive || event.target.textContent) return;

        const id = event.target.id;
        board[id] = currentPlayer === 'Player 1' ? 'X' : 'O';
        event.target.textContent = board[id];

        const winner = checkWinner();
        if (winner) {
            roundDisplay.textContent = `${currentPlayer} wins!`;
            playerDisplay.textContent = '';
            gameActive = false;
            history.push(currentPlayer);
            return;
        }

        if (!board.includes(null)) {
            roundDisplay.textContent = "It's a draw!";
            playerDisplay.textContent = '';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
        playerDisplay.textContent = currentPlayer;
        updatePlayerStyles();
    }

    function restartGame() {
        initializeGame();
    }

    function nextRound() {
        round++;
        initializeGame();
    }

    // Toggle history visibility
    // function toggleHistory() {
    //     if (historySection.style.display === 'none' || historySection.style.display === '') {
    //         historySection.style.display = 'block';
    //         updateHistory();
    //     } else {
    //         historySection.style.display = 'none';
    //     }
    // }

    // Update the history section
    // function updateHistory() {
    //     const winnersList = document.querySelector(".winners ol");
    //     winnersList.innerHTML = ''; // Clear previous list
    //     history.forEach(winner => {
    //         const li = document.createElement("li");
    //         li.textContent = winner;
    //         winnersList.appendChild(li);
    //     });
    // }

    // Event listeners
    boxes.forEach(box => box.addEventListener("click", handleBoxClick));
    restartButton.addEventListener("click", restartGame);

    // Create and style next round button
    // nextRoundButton.textContent = "Next Round";
    // nextRoundButton.classList.add("next-round");
    // nextRoundButton.addEventListener("click", nextRound);
    // document.querySelector(".main").appendChild(nextRoundButton);

    // showHistoryLink.addEventListener("click", toggleHistory);

    // Page load: Initialize game
    initializeGame();
});

const firstPlayerName = localStorage.getItem("firstPlayerName");
const secondPlayerName = localStorage.getItem("secondPlayerName");

document.getElementById("displayFirst").textContent = firstPlayerName;
document.getElementById("displaySecond").textContent = secondPlayerName;
