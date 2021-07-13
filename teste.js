
var seconds = 0 

function segundos(){
  seconds += 1

  watch.innerHTML = seconds
}

var Time = setInterval(function(){
  segundos()
},1000)

function sum(num=2){
  console.log(num +9)
}
