var currentTurn = "X";

function handleBoxClick(box) {
  if (box.innerHTML != "") {
    return;
  }
  
  box.innerHTML = currentTurn;

  if (currentTurn == "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
}

function hello(message) {
  console.log(message);
}

function add(a, b, c) {
  console.log(a + b - c);
}

var btn = document.getElementById("button1");

btn.addEventListener("click", () => add(2, 7, 3), false);
