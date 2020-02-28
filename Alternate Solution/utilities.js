const showMessage = (msg) => {
    const banner = document.getElementById("Banner");
    banner.innerHTML = "";

    var h2 = document.createElement("H2");
    h2.innerHTML = msg;
    banner.appendChild(h2);
}

const findMatchingLine = (state, val) => {
    if (val == "") return null;

    for (let i = 0; i < winningLines.length; i++) {
        const line = winningLines[i];
        const win = line.reduce((acc, curr) => {
            if (acc == false) return acc;
            return state.board[curr] == val;
        }, true)

        if (win) return line;
    }

    return null;
}
