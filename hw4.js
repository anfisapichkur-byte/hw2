document.addEventListener('DOMContentLoaded', function() {
    // задача 1 счетчик кликов
    let clickCount = 0;
    const button = document.getElementById('clickButton');
    const clickDisplay = document.getElementById('clickCount');
    const message = document.getElementById('message');

    if (button && clickDisplay && message) {
        button.addEventListener('click', function() {
            clickCount++;
            clickDisplay.textContent = clickCount;

            if (clickCount >= 15) {
                button.disabled = true;
                message.textContent = "вы достигли максимального количества кликов!";
            }
        });
    } else {
        console.log('задача 1: элементы не найдены');
    }

    // задача 2 таймер
    let timerCount = 10;
    const timerDisplay = document.getElementById('timer2');
    const resetBtn2 = document.getElementById('resetButton2');
    let timerInterval;

    if (timerDisplay && resetBtn2) {
        function startTimer2() {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
            
            timerInterval = setInterval(function() {
                timerCount--;
                timerDisplay.textContent = timerCount;

                if (timerCount <= 0) {
                    clearInterval(timerInterval);
                    timerDisplay.textContent = "время вышло!";
                }
            }, 1000);
        }

        resetBtn2.addEventListener('click', function() {
            clearInterval(timerInterval);
            timerCount = 10;
            timerDisplay.textContent = timerCount;
            startTimer2();
        });

        startTimer2();
    } else {
        console.log('задача 2: элементы не найдены');
    }

    // задача 3 секундомер
    let stopwatchCount = 0;
    let stopwatchInterval;
    const stopwatchDisplay = document.getElementById('timer3');
    const startBtn = document.getElementById('startButton');
    const stopBtn = document.getElementById('stopButton');
    const resetBtn3 = document.getElementById('resetButton3');

    if (stopwatchDisplay && startBtn && stopBtn && resetBtn3) {
        startBtn.addEventListener('click', function() {
            if (!stopwatchInterval) {
                stopwatchInterval = setInterval(function() {
                    stopwatchCount++;
                    stopwatchDisplay.textContent = stopwatchCount;
                }, 1000);
            }
        });

        stopBtn.addEventListener('click', function() {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
        });

        resetBtn3.addEventListener('click', function() {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
            stopwatchCount = 0;
            stopwatchDisplay.textContent = stopwatchCount;
        });
    } else {
        console.log('задача 3: элементы не найдены');
    }
    
    console.log('все скрипты загружены и работают!');
});    