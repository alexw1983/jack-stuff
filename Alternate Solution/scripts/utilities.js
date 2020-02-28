const showMessage = (msg) => {
    const banner = document.getElementById("Banner");
    banner.innerHTML = "";

    var h2 = document.createElement("H2");
    h2.innerHTML = msg;
    banner.appendChild(h2);
}

const findMatchingLine = (board, val) => {
    if (val == "" || !board) return null;

    for (let i = 0; i < winningLines.length; i++) {
        const line = winningLines[i];
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

    // try and block other player
    const combos = [
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

    for (let i = 0; i < combos.length; i++) {
        if (board[combos[i][0]] == X && board[combos[i][1]] == X && available.includes(combos[i][2]))
            return combos[i][2];
    }

    // try and go for a corner
    const corners = [0, 2, 6, 8];
    for (let i = 0; i < corners.length; i++) {
        if (available.includes(corners[i]))
            return corners[i];
    }

    // just go random
    return available[Math.floor(Math.random() * available.length)];
}