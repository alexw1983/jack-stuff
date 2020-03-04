const render = () => {
    const currentState = getState();
    toggleBoard(currentState.mode);

    if (getCurrentMode() == TWO_PLAYER_MODE) {
        showMessage("Current Turn = " + currentState.currentTurn);
    }

    renderGrid(currentState.board)
}

const toggleBoard = (mode) => {
    const board = document.getElementById("Board");
    const select = document.getElementById("Select");

    if (mode != NO_MODE) {
        board.classList.remove("hidden");
        select.classList.add("hidden");
    }
    else {
        board.classList.add("hidden");
        select.classList.remove("hidden");
    }
}

const renderGrid = (board) => {

    if (!board) return;

    const grid = document.getElementById("Grid");
    grid.innerHTML = "";

    let xhasWon = false;
    let ohasWon = false;
    const matchingLineX = findMatchingLine(board, X);
    const matchingLineO = findMatchingLine(board, O);
    const gameOver = !board.includes("");

    if (matchingLineX) {
        showMessage("Player X has won!!");
        xhasWon = true;
    }
    else if (matchingLineO) {
        showMessage("Player O has won!!");
        ohasWon = true;
    }
    else if (gameOver) {
        showMessage("GAME OVER");
    }

    var boxes = board.reduce((acc, curr, idx) => {
        const win = (curr == X && xhasWon && matchingLineX.includes(idx))
            || (curr == O && ohasWon && matchingLineO.includes(idx));

        return [...acc, buildBox(idx, curr, gameOver || xhasWon || ohasWon, win)]
    }, []);

    for (let i = 0; i < boxes.length; i++) {
        grid.appendChild(boxes[i]);
    }
}

const buildBox = (index, val, gameOver, winningSquare) => {
    const box = document.createElement("DIV");
    box.classList.add("box");

    box.innerHTML = val;

    if (winningSquare) {
        box.classList.add("winner");
    }
    else if (!gameOver) {
        box.classList.add("box-hover");
    }

    if (val == "" && !gameOver) {
        box.onclick = (evt) => handleBoxOnClick(index);
    }

    return box;
}
