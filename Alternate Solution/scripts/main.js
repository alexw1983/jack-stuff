
const X = "X";
const O = "O";
const NO_MODE = "";
const ONE_PLAYER_MODE = "1";
const TWO_PLAYER_MODE = "2";

const winningLines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal
    [0, 4, 8],
    [2, 4, 6]
];

const initialState = {
    mode: NO_MODE,
    currentTurn: X,
    board: new Array(9).fill("")
}

const selectMode = () => {
    setState({ mode: document.getElementById("ModeSelect").value });
    render();
}

const resetGrid = () => {
    document.getElementById("ModeSelect").selectedIndex = 0;
    clearState();
    setState(initialState);
    render();
}

const handleBoxOnClick = (index) => {
    updateBoard(index);

    switchTurn();

    if (getCurrentMode() == ONE_PLAYER_MODE && getCurrentTurn() == O) {
        runAiTurn();
        switchTurn();
    }

    render();
}

const runAiTurn = () => {
    const board = getCurrentBoard();
    const aiPlayersMove = pickAnAvailableSquare(board);
    updateBoard(aiPlayersMove);
}