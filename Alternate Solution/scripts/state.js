const setState = (state) => {
    if (sessionStorage) {
        const currentState = getState();
        const newState = currentState ? { ...currentState, ...state } : { ...state };
        sessionStorage.setItem("state", JSON.stringify(newState, null, 2));
    }
}

const getState = () => {
    if (sessionStorage) {
        return JSON.parse(sessionStorage.getItem("state"));
    }

    return null;
}

const resetState = () => {
    if (sessionStorage) {
        sessionStorage.clear();
        setState(INTIAL_STATE);
    }
}

const switchTurn = () => {
    const newTurn = getCurrentTurn() == X ? O : X;
    setState({ currentTurn: newTurn })
}

const getCurrentTurn = () => {
    return getState().currentTurn;
}

const getCurrentBoard = () => {
    return getState().board;
}

const updateBoard = (index) => {
    let newBoard = getCurrentBoard();
    newBoard[index] = getCurrentTurn();
    setState({ board: newBoard });
}

const getCurrentMode = () => {
    return getState().mode;
}

const updateMode = (newMode) => {
    setState({ mode: newMode });
}
