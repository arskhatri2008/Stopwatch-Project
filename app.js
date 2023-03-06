var milisec = document.getElementById('milisec')
var sec = document.getElementById('sec')
var min = document.getElementById('min')
var hrs = document.getElementById('hrs')

var milisecond = 0
var second = 0
var minute = 0
var hour = 0
var interval;

function start(){
    interval = setInterval(function(){
        milisecond++
        milisec.innerHTML = milisecond
        if(milisecond >= 10){
            second++
            sec.innerHTML = second
            milisecond = 0
        }
        else if(second >= 60){
            minute++
            min.innerHTML = minute
            second = 0
        }
        else if(minute >= 60){
            hour++
            hrs.innerHTML = hour
            minute = 0
        }
        else if(hour >= 99){
            milisecond = 99
            second = 60
            minute = 60
            hour = 60
        }
    },100)
    document.getElementById('startbtn').disabled = true
}

function stop(){
    clearInterval(interval)
    document.getElementById('startbtn').disabled = false
}

function reset(){
    document.getElementById('startbtn').disabled = false
    clearInterval(interval)
    milisecond = 0
    second = 0
    minute = 0
    hour = 0
    milisec.innerHTML = milisecond
    sec.innerHTML = second
    min.innerHTML = minute
    hrs.innerHTML = hour
}