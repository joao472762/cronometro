var time = new Date()
var segundos = time.getSeconds()
console.log(segundos)

var tempo = document.querySelector('#resposta')

for(var contador= 0; contador <= 60; contador++){
    timer.start()
    serTimeout(stop,3000)
    tempo.innerHTML= segundos + contador
}