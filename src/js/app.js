// class Timer {
//   constructor(element, time = 3000) {
//     this.el = element;
//     this.timer = null;
//     this.isRunning = false;
//     this.inputTime = time;
//     this.time = time;

//     this.update = this.update.bind(this);
//   }

//   start() {
//     this.isRunning = true;
//     this.timer = setInterval(this.update, 1000);
//   }

//   stop() {
//     this.isRunning = false;
//     clearInterval(this.timer);
//   }

//   restart() {
//     clearInterval(this.timer);
//     this.time = this.inputTime;
//     this.update();
//     this.isRunning = false;
//   }

//   update() {
//     if (this.isRunning) {
//       this.time -= 1;
//     }
//     const hour = Math.floor(this.time / 3600);
//     const minute = Math.floor((this.time - hour * 3600) / 60);
//     const seconds = this.time - (hour * 3600 + minute * 60);

//     this.el.innerHTML = `${`0${minute}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;
//     console.log(`${minute}:${seconds}`);
//   }
// }

// const leftHpEl = document.getElementById('left-hp');
// const rightHpEl = document.getElementById('right-hp');

// let leftHPValue = parseInt(leftHpEl.value);
// let rightHPValue = parseInt(rightHpEl.value);

// // hp можно поменять - это следит за новыми значениями
// leftHpEl.addEventListener('change', function(e) {
//   leftHPValue = parseInt(e.target.value);
// });
// rightHpEl.addEventListener('change', function(e) {
//   rightHPValue = parseInt(e.target.value);
// });

// const timer = new Timer(document.getElementById('timer'));

// function onKeyUp(e) {
//   console.log(e.keyCode);
//   const { keyCode } = e;
//   if (keyCode === 81) {
//     // q - уменьшаем левое hp
//     if (leftHPValue > 0) {
//       leftHPValue -= 1;
//       leftHpEl.value = leftHPValue;
//     }
//   } else if (keyCode === 87) {
//     // w - увеличиваем левое hp
//     leftHPValue += 1;
//     leftHpEl.value = leftHPValue;
//   } else if (keyCode === 79) {
//     // o - уменьшаем правое hp
//     if (rightHPValue > 0) {
//       rightHPValue -= 1;
//       rightHpEl.value = rightHPValue;
//     }
//   } else if (keyCode === 80) {
//     // p - увеличиваем правое hp
//     rightHPValue += 1;
//     rightHpEl.value = rightHPValue;
//   } else if (keyCode === 77) {
//     // m
//     timer.start();
//   } else if (keyCode === 66) {
//     // b
//     timer.restart();
//   } else if (keyCode === 83) {
//     // s
//     timer.stop();
//   }
// }

// // keyboard listener
// window.addEventListener('keyup', onKeyUp);


// mobile version
var left_value = document.getElementsByClassName("left_value")[0];
var leftVal = parseFloat(left_value.innerHTML);

var right_value = document.getElementsByClassName("right_value")[0];
var righthVal = parseFloat(right_value.innerHTML);


document.querySelectorAll(".plus")[0].onclick = function() {
    left_value.innerHTML = ++leftVal;
}

document.querySelectorAll(".minus")[0].onclick = function() {
  if (leftVal > 0) {
    left_value.innerHTML = --leftVal;
  } 
} 

document.querySelectorAll(".plus")[1].onclick = function() {
    right_value.innerHTML = ++righthVal;
}

document.querySelectorAll(".minus")[1].onclick = function() {
  if (righthVal > 0) {
    right_value.innerHTML = --righthVal;
  } 
} 



// document.querySelector(".plus").onclick = function() {
//   splashInput.innerHTML = ++righthVal;
// }

// document.querySelector(".minus").onclick = function() {
//   if (righthVal > 0) {
//     splashInput.innerHTML = --righthVal;
//   } 
// } 






