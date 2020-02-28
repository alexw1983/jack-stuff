const render = (state) => {
    toggleBoard(state);
    showMessage("Current Turn = " + state.currentTurn);
    renderGrid(state)
}

const toggleBoard = (state) => {
    if (state.mode > 0) {
        const board = document.getElementById("Board");
        const select = document.getElementById("Select");
        board.classList.remove("hidden");
        select.classList.add("hidden");
    }
}

const renderGrid = (state) => {
    const grid = document.getElementById("Grid");
    grid.innerHTML = "";

    let xhasWon = false;
    let ohasWon = false;
    const matchingLineX = findMatchingLine(state, X);
    const matchingLineO = findMatchingLine(state, O);

    if (matchingLineX) {
        showMessage(`Player X has won!!`);
        xhasWon = true;
    }
    else if (matchingLineO) {
        showMessage(`Player O has won!!`);
        ohasWon = true;
    }

    var boxes = state.board.reduce((acc, curr, idx) => {
        const win = (curr == X && xhasWon && matchingLineX.includes(idx))
            || (curr == O && ohasWon && matchingLineO.includes(idx));
        
        return [...acc, buildBox(idx, curr, xhasWon || ohasWon, win)]
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
