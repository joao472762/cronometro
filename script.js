function hours(){
    var Time = new Date()
    var hour = Time.getHours()
    var minuts = Time.getMinutes()
    var secunds = Time.getSeconds()

    var hours = `${hour}:${minuts}:${secunds}`

    return hours
}

function show(){
    var hour = hours()
    var watch = window.document.querySelector('#resposta')
    watch.innerHTML = hour
}
var controls = {
    active() {
            var time = setInterval(()=>{
                show()
            },1000)
            return time 
    }
}

console.log(active)

function stop(){
    
}



