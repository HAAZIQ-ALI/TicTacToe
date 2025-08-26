/*let cube1 = document.getElementById("cube-1")
let cube2 = document.getElementById("cube-2")
let cube3 = document.getElementById("cube-3")
let cube4 = document.getElementById("cube-4")
let cube5 = document.getElementById("cube-5")
let cube6 = document.getElementById("cube-6")
let cube7 = document.getElementById("cube-7")
let cube8 = document.getElementById("cube-8")
let cube9 = document.getElementById("cube-9")
what the flap i was even doing */

let boxes = document.querySelectorAll(".box")
let reseet = document.querySelector(".reset-button")
let scoreBoard = document.getElementById("scoreBoard")
let board = [
[0 , 0 , 0],
[0 , 0 , 0],
[0 , 0 , 0]
]
// 1 is X and 2 is O
let currentPlayer = 1 ;
let count = 0 ;

// Score tracking
let scores = {
    draws: 0,
    xWins: 0,
    oWins: 0
};
// Since there's 8 patterns of both to win . so we will check this 16 patterns after every click , 
// if pattern match then win , if all cubes got filled them automatically draw

const winningPatterns = [
  // Rows
  [[0,0], [0,1], [0,2]],
  [[1,0], [1,1], [1,2]],
  [[2,0], [2,1], [2,2]],

  // Columns
  [[0,0], [1,0], [2,0]],
  [[0,1], [1,1], [2,1]],
  [[0,2], [1,2], [2,2]],

  // Diagonals
  [[0,0], [1,1], [2,2]],
  [[0,2], [1,1], [2,0]],
]

const checkWinner = () => {
    for (let pattern of winningPatterns){
        let [r1,c1] = pattern[0]
        let [r2,c2] = pattern[1]
        let [r3,c3] = pattern[2]

        let pos1 = board[r1][c1]
        let pos2 = board[r2][c2]
        let pos3 = board[r3][c3]
        
        // Check if all three positions have the same value and are not empty
        if (pos1 !== 0 && pos1 === pos2 && pos2 === pos3) {
            return pos1; // Return the winner (1 for X, 2 for O)
        }
    }
    return null; // No winner found
}

// Function to update the score display
const updateScoreDisplay = () => {
    scoreBoard.innerHTML = `<span>Draws: ${scores.draws} | X: ${scores.xWins} | O: ${scores.oWins}</span>`;
}




const enableBox = () => {
    for (let box of boxes){
        box.disabled = false 
        box.textContent = "-"
    }
    // Reset the board array
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    currentPlayer = 1;
    count = 0;
}

const gameDraw = () => {
    scores.draws++;
    updateScoreDisplay();
}

const showWinner = (winner) => {
    const playerName = winner === 1 ? "X" : "O";
    
    // Update scores
    if (winner === 1) {
        scores.xWins++;
    } else {
        scores.oWins++;
    }
    updateScoreDisplay();
    
    // Disable all boxes
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetButton = () => {
    reseet.addEventListener("click", enableBox)
}

// Initialize the reset button
resetButton();

// Initialize the score display
updateScoreDisplay();

boxes.forEach((box, index) => {
    box.addEventListener("click",()=>{
        // Calculate row and column from index
        const row = Math.floor(index / 3);
        const col = index % 3;
        
        // Check if the box is already filled
        if (board[row][col] !== 0) {
            return; // Don't allow overwriting
        }
        
        if (currentPlayer === 1){
            box.textContent = "X"
            board[row][col] = 1; // Update board
            currentPlayer = 2
        }else {
            box.textContent = "O"
            board[row][col] = 2; // Update board
            currentPlayer = 1
        }
        box.disabled = true ; 
        count++

        let isWinner = checkWinner()
        
        if (isWinner) {
            showWinner(isWinner);
            return;
        }

        if (count === 9 && !isWinner){
            gameDraw()
        }
    })
})