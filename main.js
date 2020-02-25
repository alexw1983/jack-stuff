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


  //horizontal X
  document.getElementById("cell_1").innerHTML == "X" &&
  document.getElementById("cell_2").innerHTML == "X" &&
  document.getElementById("cell_3").innerHTML == "X" ||
  document.getElementById("cell_4").innerHTML == "X" &&
  document.getElementById("cell_5").innerHTML == "X" &&
  document.getElementById("cell_6").innerHTML == "X" ||
  document.getElementById("cell_7").innerHTML == "X" &&
  document.getElementById("cell_8").innerHTML == "X" &&
  document.getElementById("cell_9").innerHTML == "X" ||

  //vertical X
  document.getElementById("cell_1").innerHTML == "X" &&
  document.getElementById("cell_4").innerHTML == "X" &&
  document.getElementById("cell_7").innerHTML == "X" ||
  document.getElementById("cell_2").innerHTML == "X" &&
  document.getElementById("cell_5").innerHTML == "X" &&
  document.getElementById("cell_8").innerHTML == "X" ||
  document.getElementById("cell_3").innerHTML == "X" &&
  document.getElementById("cell_6").innerHTML == "X" &&
  document.getElementById("cell_9").innerHTML == "X" ||

  //diagonal X
  document.getElementById("cell_1").innerHTML == "X" &&
  document.getElementById("cell_5").innerHTML == "X" &&
  document.getElementById("cell_9").innerHTML == "X" ||
  document.getElementById("cell_3").innerHTML == "X" &&
  document.getElementById("cell_5").innerHTML == "X" &&
  document.getElementById("cell_7").innerHTML == "X" ||
  
  //horizontal O
  document.getElementById("cell_1").innerHTML == "O" &&
  document.getElementById("cell_2").innerHTML == "O" &&
  document.getElementById("cell_3").innerHTML == "O" ||
  document.getElementById("cell_4").innerHTML == "O" &&
  document.getElementById("cell_5").innerHTML == "O" &&
  document.getElementById("cell_6").innerHTML == "O" ||
  document.getElementById("cell_7").innerHTML == "O" &&
  document.getElementById("cell_8").innerHTML == "O" &&
  document.getElementById("cell_9").innerHTML == "O" ||

  //vertical O
  document.getElementById("cell_1").innerHTML == "O" &&
  document.getElementById("cell_4").innerHTML == "O" &&
  document.getElementById("cell_7").innerHTML == "O" ||
  document.getElementById("cell_2").innerHTML == "O" &&
  document.getElementById("cell_5").innerHTML == "O" &&
  document.getElementById("cell_8").innerHTML == "O" ||
  document.getElementById("cell_3").innerHTML == "O" &&
  document.getElementById("cell_6").innerHTML == "O" &&
  document.getElementById("cell_9").innerHTML == "O" ||

  //diagonal O
  document.getElementById("cell_1").innerHTML == "O" &&
  document.getElementById("cell_5").innerHTML == "O" &&
  document.getElementById("cell_9").innerHTML == "O" ||
  document.getElementById("cell_3").innerHTML == "O" &&
  document.getElementById("cell_5").innerHTML == "O" &&
  document.getElementById("cell_7").innerHTML == "O" ||
  





function hello(message) {
  console.log(message);
}

function add(a, b, c) {
  console.log(a + b - c);
}

var btn = document.getElementById("button1");

btn.addEventListener("click", () => add(2, 7, 3), false);
