
const selectMode = () => {
    const newMode = document.getElementById("ModeSelect").value;
    showMessage("New Game");
    updateMode(newMode);

    const rand = [0, 1][Math.floor(Math.random() * 2)];
    const newTurn = rand == 0 ? X : O;

    setState({ currentTurn: newTurn });

    if (newMode == ONE_PLAYER_MODE) {
        runAiTurn();
        switchTurn();
    }

    render();
}

const resetGrid = () => {
    document.getElementById("ModeSelect").selectedIndex = 0;
    resetState();
    render();
}

const handleBoxOnClick = (index) => {
    updateBoard(index);

    switchTurn();

    if (getCurrentMode() == ONE_PLAYER_MODE) {
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