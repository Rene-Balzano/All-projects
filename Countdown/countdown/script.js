"use strict";

const start = document.querySelector("main");
const btnStart = document.querySelector("input");
const countDownStart = document.querySelector("#time");

function countDown(duration) {
  let timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    console.log(timer);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countDownStart.innerText = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

btnStart.addEventListener("click", () => {
  countDown(25 * 60);
});
