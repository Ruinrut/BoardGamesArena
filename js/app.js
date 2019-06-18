class Timer {
  constructor(element, time = 3000) {
    this.el = element;
    this.timer = null;
    this.isRunning = false;
    this.inputTime = time;
    this.time = time;

    this.update = this.update.bind(this);
  }

  start() {
    this.isRunning = true;
    this.timer = setInterval(this.update, 1000);
  }
  stop() {
    this.isRunning = false;
    clearInterval(this.timer);
  }
  restart() {
    clearInterval(this.timer);
    this.time = this.inputTime;
    this.update();
    this.isRunning = false;
  }

  update() {
    if (this.isRunning) {
      this.time -= 1;
    }
    const hour = Math.floor(this.time / 3600);
    const minute = Math.floor((this.time - hour * 3600) / 60);
    const seconds = this.time - (hour * 3600 + minute * 60);

    this.el.innerHTML = `${`0${minute}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;
    console.log(`${minute}:${seconds}`);
  }
}

const leftHpEl = document.getElementById('left-hp');
const rightHpEl = document.getElementById('right-hp');

let leftHPValue = parseInt(leftHpEl.value);
let rightHPValue = parseInt(rightHpEl.value);

// hp можно поменять - это следит за новыми значениями
leftHpEl.addEventListener('change', function(e) {
  leftHPValue = parseInt(e.target.value);
});
rightHpEl.addEventListener('change', function(e) {
  rightHPValue = parseInt(e.target.value);
});

const timer = new Timer(document.getElementById('timer'));

function onKeyUp(e) {
  console.log(e.keyCode);
  const { keyCode } = e;
  if (keyCode === 81) {
    // q - уменьшаем левое hp
    if (leftHPValue > 0) {
      leftHPValue -= 1;
      leftHpEl.value = leftHPValue;
    }
  } else if (keyCode === 87) {
    // w - увеличиваем левое hp
    leftHPValue += 1;
    leftHpEl.value = leftHPValue;
  } else if (keyCode === 79) {
    // o - уменьшаем правое hp
    if (rightHPValue > 0) {
      rightHPValue -= 1;
      rightHpEl.value = rightHPValue;
    }
  } else if (keyCode === 80) {
    // p - увеличиваем правое hp
    rightHPValue += 1;
    rightHpEl.value = rightHPValue;
  } else if (keyCode === 77) {
    // m
    timer.start();
  } else if (keyCode === 66) {
    // b
    timer.restart();
  } else if (keyCode === 83) {
    // s
    timer.stop();
  }
}

// keyboard listener
window.addEventListener('keyup', onKeyUp);


////////////////////////////
circlesCount = document.querySelector(".cirles-list").getElementsByTagName("li").length;

leftPlayer = document.querySelector('.circles__player-left');
rightPlayer = document.querySelector('.circles__player-right');

circlesListLeftPlayer = document.querySelector(".circles__player-left").querySelector(".cirles-list");
circlesListRightPlayer = document.querySelector(".circles__player-right").querySelector(".cirles-list");

var left_i = 0,
    right_i = 0;

leftPlayer.addEventListener('click', function(e) {
  if (left_i == circlesCount) {
    left_i = 0;
    elements = circlesListLeftPlayer.getElementsByTagName("li");
    for (let j = 0; j < elements.length; j++) {
      elements[j].classList.remove("cirles-list__item_color_green");
    }
  } else {
    el = circlesListLeftPlayer.getElementsByTagName("li")[circlesCount - 1 - left_i];
    el.className += " cirles-list__item_color_green";
    left_i++;
  }
});

rightPlayer.addEventListener('click', function(e) {
  if (right_i == circlesCount) {
    right_i = 0;
    elements = circlesListRightPlayer.getElementsByTagName("li");
    for (let j = 0; j < elements.length; j++) {
      elements[j].classList.remove("cirles-list__item_color_green");
    }
  } else {
    el = circlesListRightPlayer.getElementsByTagName("li")[right_i];
    el.className += " cirles-list__item_color_green";
    right_i++;
  }
});

