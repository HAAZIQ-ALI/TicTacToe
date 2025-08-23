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

let board = [
[0 , 0 , 0],
[0 , 0 , 0],
[0 , 0 , 0]
]
// 1 is X and 2 is O
let currentPlayer = 1 ;
let count = 0 ;
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
    }
}




const enableBox = () => {
    for (let box of boxes){
        box.disabled = false 
        box.textContent = "-"
    }
}




boxes.forEach((box) => {
    box.addEventListener("click",()=>{
         if (currentPlayer === 1){
            box.textContent = "X"
        currentPlayer = 2
    }else {
        box.textContent = "O"
        currentPlayer = 1
    }
    box.disabled = true ; 
    count++

    let isWinner = checkWinner()

    if (count===9 && !isWinner){
        gameDraw()
    }


    })
})















