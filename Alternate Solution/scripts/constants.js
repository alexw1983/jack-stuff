const X = "X";
const O = "O";
const NO_MODE = "";
const ONE_PLAYER_MODE = "1";
const TWO_PLAYER_MODE = "2";

const INTIAL_STATE = {
    mode: NO_MODE,
    currentTurn: X,
    board: new Array(9).fill("")
}

const CORNERS = [0, 2, 6, 8];

const WINNING_LINES = [
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

const COMBOS = [
    // horizontal
    [0, 1, 2],
    [1, 2, 0],
    [0, 2, 1],
    [3, 4, 5],
    [4, 5, 3],
    [3, 5, 4],
    [6, 7, 8],
    [7, 8, 6],
    [6, 8, 7],
    // vertical
    [0, 3, 6],
    [3, 6, 0],
    [0, 6, 3],
    [1, 4, 7],
    [4, 7, 1],
    [1, 7, 4],
    [3, 5, 8],
    [5, 8, 3],
    [3, 8, 5],
    // diagonal
    [0, 4, 8],
    [0, 8, 4],
    [4, 8, 0],
    [2, 4, 6],
    [4, 6, 2],
    [2, 6, 4]
];