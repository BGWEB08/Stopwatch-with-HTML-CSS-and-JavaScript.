    let [miliseconds,seconds,minutes,hours] = [0,0,0,0];
    let timerCounter = document.querySelector(".timer");
    const startBtn = document.getElementById("start");
    const pauseBtn = document.getElementById("pause");
    const resetBtn = document.getElementById("reset");
    let int = null;

    startBtn.addEventListener("click",() => {
        if(int !== null) {
            clearInterval(int);
        }

        int = setInterval(displayTimer,10);
    })

    function displayTimer(){
        miliseconds += 10;
        seconds = miliseconds === 1000 ? (seconds + 1) % 60 : seconds;
        minutes = seconds === 0 && miliseconds === 0 ? (minutes+1) %60 : minutes;
        hours = minutes === 0 && seconds === 0 && miliseconds === 0 ? (hours +1) : hours;
        miliseconds = miliseconds === 1000 ? 0 : miliseconds;

        let h = String(hours).padStart(2,"0");
        let m = String(minutes).padStart(2,"0");
        let s = String(seconds).padStart(2,"0");
        let ms = String(miliseconds).padEnd(3,"0");
        timerCounter.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    }

    pauseBtn.addEventListener("click",() => {
        clearInterval(int);
    })

    resetBtn.addEventListener("click",() => {
        clearInterval(int);
        [miliseconds,seconds,minutes,hours] = [0,0,0,0]
        timerCounter.innerHTML = "00 : 00 : 00 : 000";
    })