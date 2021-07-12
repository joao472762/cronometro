var i = 0;
var loop = setInterval(function(){ 
  console.log("valor de i="+i); 
  if(i == 10){
     clearInterval(loop);
  }
  i++;
}, 1000);
var voltas = setInterv(function(){
    console.log(`sv sv familia pela ${i} vez`)
    if(i == 20){
      clearInterval(loop)}
    i++;
},1000)