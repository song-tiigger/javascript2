// 변수
let $work = document.getElementById('work');
let $break = document.getElementById('break');
let $minutes = document.getElementById('minutes');
let $seconds = document.getElementById('seconds');
const $start = document.getElementById('start');
const $pause = document.getElementById('pause');
const $reset = document.getElementById('reset');
const $plus_btn = document.getElementById("plus_btn");
const $minus_btn = document.getElementById("minus_btn");

window.onload = () => {
  $minutes.innerHTML = workTime;
  $seconds.innerHTML = "00";

  $work.classList.add('active');

  $start.addEventListener('click', startTimer);
  $reset.addEventListener('click', resetTimer);
  $pause.addEventListener('click', () => {
    clearInterval(timeInterval);
    document.getElementById('start').style.display = "block";
    document.getElementById('pause').style.display = "none";
  });
}

let workTime = 25;
let breakTime = 5;

function startTimer() {
  // start, pause 버튼 토글 기능
  document.getElementById('start').style.display = "none";
  document.getElementById('pause').style.display = "block";

  $seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  timeInterval = setInterval(() => {
    document.getElementById('minutes').innerHTML = ('00'+ workMinutes).slice(-2);
    document.getElementById('seconds').innerHTML = ('00'+ $seconds).slice(-2);

    $seconds = $seconds - 1;

    if ($seconds === 0) {
      workMinutes = workMinutes - 1;

      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;

          $work.classList.remove('active');
          $break.classList.add('active');
        } else {
          workMinutes = workTime;
          breakCount++;

          $break.classList.remove('active');
          $work.classList.add('active');
        }
      }
      $seconds = 59;
    }
  }, 1000)
}

function pauseTimer() {
  clearInterval(timeInterval);
}

function resetTimer() {
  location.reload();
}