
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