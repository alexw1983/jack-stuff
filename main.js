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

  if (checkForWin()) {
    alert("Your Have Won");
  }
}

function checkForWin() {
  var box_1 = document.getElementById("box_1").innerHTML;
  var box_2 = document.getElementById("box_2").innerHTML;
  var box_3 = document.getElementById("box_3").innerHTML;
  var box_4 = document.getElementById("box_4").innerHTML;
  var box_5 = document.getElementById("box_5").innerHTML;
  var box_6 = document.getElementById("box_6").innerHTML;
  var box_7 = document.getElementById("box_7").innerHTML;
  var box_8 = document.getElementById("box_8").innerHTML;
  var box_9 = document.getElementById("box_9").innerHTML;

  //horizontal X
  if (
    (box_1 == "X" && box_2 == "X" && box_3 == "X") ||
    (box_4 == "X" && box_5 == "X" && box_6 == "X") ||
    (box_7 == "X" && box_8 == "X" && box_9 == "X")
  ) {
    return true;
  }

  //Horizontal O
  if (
    (box_1 == "O" && box_2 == "O" && box_3 == "O") ||
    (box_4 == "O" && box_5 == "O" && box_6 == "O") ||
    (box_7 == "O" && box_8 == "O" && box_9 == "O")
  ) {
    return true;
  }

  //Vertical X
  if (
    (box_1 == "X" && box_4 == "X" && box_7 == "X") ||
    (box_2 == "X" && box_5 == "X" && box_8 == "X") ||
    (box_3 == "X" && box_6 == "X" && box_9 == "X")
  ) {
    return true;
  }

  //Vertical O
  if (
    (box_1 == "O" && box_4 == "O" && box_7 == "O") ||
    (box_2 == "O" && box_5 == "O" && box_8 == "O") ||
    (box_3 == "O" && box_6 == "O" && box_9 == "O")
  ) {
    return true;
  }

  //Diagonal O
  if (
    (box_1 == "O" && box_5 == "O" && box_9 == "O") ||
    (box_3 == "O" && box_5 == "O" && box_7 == "O")
  ) {
    return true;
  }

  //Diagonal X
  if (
    (box_1 == "X" && box_5 == "X" && box_9 == "X") ||
    (box_3 == "X" && box_5 == "X" && box_7 == "X")
  ) {
    return true;
  }

  return false;
}

function reset() {
  document.getElementById("box_1").innerHTML = "";
  document.getElementById("box_2").innerHTML = "";
  document.getElementById("box_3").innerHTML = "";
  document.getElementById("box_4").innerHTML = "";
  document.getElementById("box_5").innerHTML = "";
  document.getElementById("box_6").innerHTML = "";
  document.getElementById("box_7").innerHTML = "";
  document.getElementById("box_8").innerHTML = "";
  document.getElementById("box_9").innerHTML = "";
}

