
var seconds = 0 

function segundos(){
  seconds += 1
  console.log(seconds)
}

var Time = setInterval(function(){
  segundos()
},1000)

