
const X = "X";
const O = "O";
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

let state = {
    mode: 0,
    currentTurn: X,
    board: new Array(9).fill("")
}

const selectMode = () => {
    state.mode = document.getElementById("ModeSelect").value;
    render(state);
}

const resetGrid = () => {
    state = {
        mode: 1,
        currentTurn: X,
        board: new Array(9).fill("")
    }

    render(state);
}

const handleBoxOnClick = (index) => {
    state.board[index] = state.currentTurn;

    switchTurn();

    if (state.mode == 1 && state.currentTurn == O) {
        setTimeout(() => { }, 1000);

        const available = state.board.reduce((acc, curr, idx) => {
            if (curr == "")
                return [...acc, idx]

            return acc;
        }, [])
        console.log(available);
        const randomElement = available[Math.floor(Math.random() * available.length)];
        state.board[randomElement] = state.currentTurn;
        switchTurn();
    }

    render(state);
}


const switchTurn = () => {
    if (state.currentTurn == X) {
        state.currentTurn = O;
    } else {
        state.currentTurn = X;
    }
}

render(state);
