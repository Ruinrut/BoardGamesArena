var domTimer = document.querySelector(".timer");
var matchTime = 3000; //В секундах
var timer = setInterval(updateTime, 1000);
var isRunning = false;

function updateTime() {
  if (isRunning) {
    matchTime -= 1;
  }

  const hour = Math.floor(matchTime / 3600);
  const minute = Math.floor((matchTime - hour * 3600) / 60);
  const seconds = matchTime - (hour * 3600 + minute * 60);
  domTimer.innerHTML = `${`0${minute}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;
}

function onKeyUp(e) {
  const { keyCode } = e;
 
  console.log("on key up");
  if (isRunning) {
    matchTime = 3000;
    rightPlayerWins.innerHTML = 0;
    leftPlayerWins.innerHTML = 0;
    isRunning = false;
    updateTime();
  } 
  else{
    isRunning = true;
  }
 }

 // keyboard listener
domTimer.addEventListener('click', onKeyUp);

var leftPlayerWins = document.querySelector(".left_left");
var leftPlayerWinsVal = parseFloat(leftPlayerWins.innerHTML);
var rightPlayerWins = document.querySelector(".right_right");
var rightPlayerWinsVal= parseFloat(rightPlayerWins.innerHTML);
 
function leftPlayerWin() {
  if (leftPlayerWinsVal >= 2){
    leftPlayerWinsVal = 0;
  }
  else{
    ++leftPlayerWinsVal;
  }
  leftPlayerWins.innerHTML = leftPlayerWinsVal;
}

function rightPlayerWin() {
  if (rightPlayerWinsVal >= 2){
    rightPlayerWinsVal = 0;
  }
  else{
    ++rightPlayerWinsVal;
  }
  rightPlayerWins.innerHTML = rightPlayerWinsVal;
}

leftPlayerWins.addEventListener('click', leftPlayerWin);
rightPlayerWins.addEventListener('click', rightPlayerWin);

// mobile version
var left_value = document.querySelector(".left_value");
var leftVal = parseFloat(left_value.innerHTML);
var right_value = document.querySelector(".right_value");
var righthVal = parseFloat(right_value.innerHTML);

document.querySelectorAll(".plus")[0].onclick = function() {
  console.log("on key up");
    left_value.innerHTML = ++leftVal;
}

document.querySelectorAll(".minus")[0].onclick = function() {
  left_value.innerHTML = --leftVal;
} 

document.querySelectorAll(".plus")[1].onclick = function() {
    right_value.innerHTML = ++righthVal;
}

document.querySelectorAll(".minus")[1].onclick = function() {
  right_value.innerHTML = --righthVal;
} 

document.querySelector(".reset").onclick = function() {
  left_value.innerHTML = 20;
  right_value.innerHTML = 20;
  leftVal = 20;
  righthVal = 20;
  document.querySelector(".reset").style.display = "none";
  document.querySelector(".menu_btn").style.display = "block";
}

document.querySelector(".menu_btn").onclick = function() {
  document.querySelector(".menu_btn").style.display = "none";
  document.querySelector(".reset").style.display = "block";
}