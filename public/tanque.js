 let actualLevel=80;
let max= 200;
let min=200;
let waterElement = document.querySelector('.water');
setInterval(function(){ 
 waterElement.id = "rise";
 waterElement.style.height = 450*(actualLevel/100)+"px";
}, 1000); 