const X = "X";
const O = "O";

var state = {
    mode: 1,
    currentTurn: X,
    board: new Array(9).fill("")
}

const resetGrid = () => {
    state = {
        mode: 1,
        currentTurn: X,
        board: new Array(9).fill("")
    }   

    render(state);
}

const checkPossibleWins = (val) => {
    return checkLine(0, 1, 2, val) || checkLine(3, 4, 5, val) || checkLine(6, 7, 8, val)
        || checkLine(0, 3, 6, val) || checkLine(1, 4, 7, val) || checkLine(2, 5, 8, val)
        || checkLine(0, 4, 8, val) || checkLine(2, 4, 6, val)
}

const checkLine = (a, b, c, val) => {
    if (state.board[a] === val && state.board[b] === val && state.board[c] === val) {
        const boxes = document.getElementsByClassName("box");
        boxes[a].classList.add("winner");
        boxes[b].classList.add("winner");
        boxes[c].classList.add("winner");

        return true;
    }

    return false;
}

const checkForWin = () => {
    const xHasWon = checkPossibleWins(X);
    const oHasWon = checkPossibleWins(O);

    if (oHasWon || xHasWon) {
        showMessage(`Player ${oHasWon ? O : X} has won!!`);
        const boxes = document.getElementsByClassName("box");
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].onclick = null;
            boxes[i].classList.remove("box-hover");
        };
    }
}

const switchTurn = () => {
    if (state.currentTurn == X) {
        state.currentTurn = O;
    } else {
        state.currentTurn = X;
    }
}

const handleBoxOnClick = (index) => {
    state.board[index] = state.currentTurn;
    switchTurn();
    render(state);
    checkForWin();
}

const buildBox = (index) => {
    var box = document.createElement("DIV");
    box.classList.add("box");
    box.classList.add("box-hover");
    box.innerHTML = state.board[index];

    if (state.board[index] == "") {
        box.onclick = (evt) => handleBoxOnClick(index);
    }

    return box;
}

const showMessage = (msg) => {
    const banner = document.getElementById("Banner");
    banner.innerHTML = "";

    var h2 = document.createElement("H2");
    h2.innerHTML = msg;
    banner.appendChild(h2);
}

const render = (state) => {
    if (!!state && !!state.board) {
        const grid = document.getElementById("Grid");
        const banner = document.getElementById("Banner");

        grid.innerHTML = "";
        banner.innerHTML = "";

        for (let i = 0; i < state.board.length; i++) {
            grid.appendChild(buildBox(i));
        }

        showMessage("Current Turn = " + state.currentTurn);
    }
}

render(state);
