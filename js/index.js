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

// 즉시 실행, 버튼 이벤트
window.onload = () => {
  $minutes.innerHTML = workTime;
  $seconds.innerHTML = "00";

  $work.classList.add('active');

  $start.addEventListener('click', startTimer);
  $reset.addEventListener('click', resetTimer);
}

let workTime = 25;
let breakTime = 5;

function startTimer() {
  // start, pause 버튼 토글 기능
  document.getElementById('start').style.display = "none";
  document.getElementById('reset').style.display = "block";

  $seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;
  let breakCount = true;

  timeInterval = setInterval(() => {
    document.getElementById('minutes').innerHTML = ('00'+ workMinutes).slice(-2);
    document.getElementById('seconds').innerHTML = ('00'+ $seconds).slice(-2);

    $seconds = $seconds - 1;

    if ($seconds === 0) {
      // '초'가 0이 되면 '분'이 1만큼 감소
      workMinutes = workMinutes - 1;

      // 집중, 휴식 타이머 자동 전환
      if (workMinutes === -1) { // 25분이 다 되어서 -1이 되면
        if (breakCount == true) { 
          workMinutes = breakMinutes;
          breakCount = false;

          $work.classList.remove('active');
          $break.classList.add('active');
        } else {
          workMinutes = workTime;
          breakCount = true;

          $break.classList.remove('active');
          $work.classList.add('active');
        }
      }
      $seconds = 59;
    }
  }, 1000)
}

function resetTimer() {
  location.reload();
}