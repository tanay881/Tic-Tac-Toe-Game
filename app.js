const winCon = document.querySelector('.win-msg');
const newGameBtn = document.querySelector('#new-game');
const winMsg = document.querySelector('#msg');
const btns = document.querySelectorAll('.box'); 
const reset = document.querySelector('#reset');

let turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(turn) {
            btn.innerText = "X";
            turn = false;
        } else {
            btn.innerText = "O";
            turn = true;
        }
        btn.disabled = true;
        checkAns();
    });
});

const checkAns = () => {
    for(let pattern of winPatterns) {

        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}

function showWinner(winner){
    winMsg.innerText = `Winner is Player ${winner}`;
    winCon.classList.remove('hide');
    reset.classList.add('hide');
    disableBtns();
} 

const disableBtns = () => {
    for(let btn of btns) {
        btn.disabled = true;
    }
}

const enableBtns = () => {
    for(let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

reset.addEventListener('click', () => {
    resetGame();
});

newGameBtn.addEventListener('click', () => {
    winCon.classList.add('hide');
    reset.classList.remove('hide');
    resetGame();
});

const resetGame = () => {
    turn = true;
    enableBtns();
}