var seconds = 0
var minuts = 0
var hour = 0
var milleseconds = 0
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
        },16.5)
        
    },
    refresh(){
        var mili =  milleseconds
        if(mili < 10 )
        mili = "0" + mili
        var Time = seconds < 10 ? `${minuts}:${"0" + seconds}:${mili}`: `${minuts}:${seconds}:${mili}`
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
    milleseconds +=1
    if(milleseconds > 60){
        milleseconds = 0
        seconds += 1
    }
    if(seconds > 60){
        seconds = 0
        minuts += 1
    }
    if(minuts >60){
        minuts = 0 
        hour += 1
    }
    var mili =  milleseconds
    if(mili < 10 )
    mili = "0" + mili
     seconds < 10 ? watch.innerHTML = `${minuts}:${ "0" + seconds}:${mili}`: watch.innerHTML = `${minuts}:${ seconds}:${mili}`

  
}
function createLi(value){
    var result = value
    var li = document.createElement('li')
    li.innerHTML = result
    list.appendChild(li)

}



