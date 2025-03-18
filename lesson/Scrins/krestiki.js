const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const size = 3;
const cellSize = canvas.width / size;
let board = Array(size).fill().map(() => Array(size).fill(null));
let currentPlayer = "X";
let gameOver = false;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 2;
    for (let i = 1; i < size; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
    }
}

drawGrid();

canvas.addEventListener("click", (event) => {
    if (gameOver) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / cellSize);
    const y = Math.floor((event.clientY - rect.top) / cellSize);
    
    if (board[y][x] !== null) {
        alert("Эта клетка уже занята!");
        return;
    }
    
    board[y][x] = currentPlayer;
    drawSymbol(x, y, currentPlayer);
    
    if (checkWinner(currentPlayer)) {
        alert(`${currentPlayer} победил!`);
        gameOver = true;
        setTimeout(resetGame, 2000);
        return;
    }
    
    if (isDraw()) {
        alert("Ничья!");
        gameOver = true;
        setTimeout(resetGame, 2000);
        return;
    }
    
    currentPlayer = currentPlayer === "X" ? "O" : "X";
});

function drawSymbol(x, y, player) {
    ctx.font = "60px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    if (player === "X") {
        ctx.fillStyle = "red";
    } else {
        ctx.fillStyle = "green";
    }
    
    ctx.fillText(player, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
}

function checkWinner(player) {
    for (let i = 0; i < size; i++) {
        if (board[i].every(cell => cell === player)) return true;
        if (board.map(row => row[i]).every(cell => cell === player)) return true;
    }
    if (board.map((row, i) => row[i]).every(cell => cell === player)) return true;
    if (board.map((row, i) => row[size - 1 - i]).every(cell => cell === player)) return true;
    return false;
}

function isDraw() {
    return board.every(row => row.every(cell => cell !== null));
}

function resetGame() {
    board = Array(size).fill().map(() => Array(size).fill(null));
    gameOver = false;
    drawGrid();
}