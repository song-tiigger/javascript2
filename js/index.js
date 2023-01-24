

// window.onload = function() {
//     // 버튼 클릭시 증가, 감소
//     const $plus_btn = document.getElementById("plus_btn");
//     const $minus_btn = document.getElementById("minus_btn");

//     let num = 0;

//     $plus_btn.addEventListener('click', e => {
//         num += 5;
//         document.getElementById("minuite").value = num;

//         if(num > 60) {
//             alert('최대 60분까지 설정할 수 있습니다.');
//             $plus_btn.removeEventListener('click', arguments.callee);
//         }
//     })

//     $minus_btn.addEventListener('click', e => {
//         num -= 5;
//         document.getElementById("minuite").value = num;
//     })
// }





// variables

let $work = document.getElementById('work');
let $break = document.getElementById('break');
let $minutes = document.getElementById('minutes');
let $seconds = document.getElementById('seconds');
const $start = document.getElementById('start'); 
const $pause = document.getElementById('pause'); 
const $reset = document.getElementById('reset'); 


let workTime = 25;
let breakTime = 5;


// display
window.onload = () => {
    $minutes.innerHTML = workTime;
    $seconds.innerHTML = "00";

    $work.classList.add('active');

    $start.addEventListener('click', startTimer);
    // $reset.addEventListener('click', resetTimer);
}

// start timer
function startTimer() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    
    // change the time
    $seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = $seconds;

        // start
        $seconds = $seconds - 1;

        if($seconds === 0) {
            workMinutes = workMinutes - 1;
            
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    $work.classList.remove('active');
                    $break.classList.add('active');
                } else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++;

                    // change the painel
                    $break.classList.remove('active');
                    $work.classList.add('active');
                }
            }
            $seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000);
}


function pauseTimer() {

}

function resetTimer() {
    clearInterval(timerFunction);
    $minutes.innerHTML = 25
    $seconds.innerHTML = "00";
}
