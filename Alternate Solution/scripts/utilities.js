const showMessage = (msg) => {
    const banner = document.getElementById("Banner");
    banner.innerHTML = "";

    var h2 = document.createElement("H2");
    h2.innerHTML = msg;
    banner.appendChild(h2);
}

const findMatchingLine = (board, val) => {
    if (val == "" || !board) return null;

    for (let i = 0; i < WINNING_LINES.length; i++) {
        const line = WINNING_LINES[i];
        const win = line.reduce((acc, curr) => {
            if (acc == false) return acc;
            return board[curr] == val;
        }, true)

        if (win) return line;
    }

    return null;
}

const pickAnAvailableSquare = (board) => {

    const available = board.reduce((acc, curr, idx) => {
        if (curr == "")
            return [...acc, idx]

        return acc;
    }, [])

    // try and win
    for (let i = 0; i < COMBOS.length; i++) {
        if (board[COMBOS[i][0]] == O && board[COMBOS[i][1]] == O && available.includes(COMBOS[i][2]))
            return COMBOS[i][2];
    }

    // try and block other player
    for (let i = 0; i < COMBOS.length; i++) {
        if (board[COMBOS[i][0]] == X && board[COMBOS[i][1]] == X && available.includes(COMBOS[i][2]))
            return COMBOS[i][2];
    }

    // try and go for a corner
    for (let i = 0; i < CORNERS.length; i++) {
        if (available.includes(CORNERS[i]))
            return CORNERS[i];
    }

    // just go random
    return available[Math.floor(Math.random() * available.length)];
}