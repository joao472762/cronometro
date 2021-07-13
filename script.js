var seconds = 0
var minuts = 0
var hour = 0
var time;

var watch = window.document.getElementById('resposta')
var list = document.querySelector('#list')

var controls = {
    stop() {
        clearInterval(time)
    },
    active(){
        time = setInterval(()=>{
            Time()
        },1000)
        
    },
    refresh(){
        var Time = seconds < 10 ? `${minuts}:${"0" + seconds}`: `${minuts}:${seconds}`
        createLi(Time)
        hour = 0
        minuts = 0
        seconds = 0
        stop()
    }
}
function stop(){
    clearInterval(time)
}


function Time (){

    seconds += 1
    if(seconds > 60){
        seconds = 0
        minuts += 1
    }
    if(minuts > 60){
        minuts = 0
        hour = 0
    }
     seconds < 10 ? watch.innerHTML = `${minuts}:${ "0" + seconds}` : watch.innerHTML = `${minuts}:${ seconds}`

  
}
function createLi(value){
    var result = value
    var li = document.createElement('li')
    li.innerHTML = result
    list.appendChild(li)

}



