var seconds = 0
var minuts = 0
var hour = 0

var watch = window.document.getElementById('resposta')
var time;

function stop(){
    clearInterval(time)
}
function active(){
    time = setInterval(()=>{
        somar()
    },1000)
    
}

function somar (){

    seconds += 1
    if(seconds > 60){
        seconds = 0
        minuts += 1
    }
    if(minuts > 60){
        minuts = 0
        hour = 0
    }
    

    watch.innerHTML = `${minuts}:${seconds}`
  
}
function refresh(){
    seconds = 0
    minuts =  0
}




