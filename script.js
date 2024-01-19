const hour = document.getElementById('hr');
const minutes = document.getElementById('min');
const second = document.getElementById('sec');
const format = document.getElementById('format');

addEventListener("DOMContentLoaded", ()=>{
    setInterval(Time,1000);
})


let Time = ()=>{

    let current_time = new Date();
     
    let hr = current_time.getHours();
    let min = current_time.getMinutes();
    let sec = current_time.getSeconds();

    hour.innerHTML = hr;
    minutes.innerHTML = min;
    second.innerHTML = sec;
    // Form 2 Digit
    if(hr<10){
        hour.innerHTML = "0" + hr;
    }
    else if(min<10){
        minutes.innerHTML = "0" + min;
    }
    else if(sec<10){
        second.innerHTML = "0" + sec;
    }

    // For AM or PM
    if(hr<12){
        format.innerHTML = "AM"
    }
    else{
        format.innerHTML = "PM"
    }
}