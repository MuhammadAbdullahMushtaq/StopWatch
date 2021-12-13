var hrspara = document.getElementById("hrs");
var minspara = document.getElementById("min");
var secpara = document.getElementById("sec");
var msecpara = document.getElementById("msec");

var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval;



function timer(){
    msec ++
    msecpara.innerHTML = msec;
    if(msec == 100){
        sec++
        secpara.innerHTML = sec;
        msec = 0;
    }
    else if(sec == 60){
        min++
        minspara.innerHTML = min;
        sec = 0;
    }
    else if(min == 60){
        hrs++
        hrspara.innerHTML = hrs;
        min = 0;
    }
    else if(hrs == 24){
        clearInterval(interval);
        msec = 0;
        sec = 0;
        min = 0;
        hrs = 0;
        msecpara.innerHTML = "00";
        secpara.innerHTML = "00";
        minspara.innerHTML = "00";
        hrspara.innerHTML = "00";
        startbtn.disabled = false;

    }
}



function start(){
    var startbtn = document.getElementById("startbtn");
    interval = setInterval(timer,10);
    startbtn.disabled = true;
    stopbtn.disabled = false;
}



function stop(){
    var startbtn = document.getElementById("startbtn");
    clearInterval(interval);
    startbtn.disabled = false;
    stopbtn.disabled = true;
}


var resetbtn = document.getElementById("resetbtn");
var stopbtn = document.getElementById("stopbtn");


function reset(){
    clearInterval(interval);
    msecpara.innerHTML = "00";
    secpara.innerHTML = "00";
    minspara.innerHTML = "00";
    hrspara.innerHTML = "00";


    hrs = 0;
    min = 0;
    sec = 0;
    msec = 0;
    startbtn.disabled = false;
    stopbtn.disabled = true;
}



// counter = 0;
// function timer(){
//     document.write(++counter + "<br>");
// }
// setInterval(timer,1000);'