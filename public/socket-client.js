const socket = io('http://localhost:3000/');

if (socket) {
    console.log('estoy conectado al socket del servidor');
    
}

let monitor = document.getElementById('monitor')
socket.on('datos-proximity', (data) =>{
    let numero = Number(data)
    if(data < 5){
        console.log('wow hay mucha agua');
    }
     monitor.innerHTML = `
     <h1>${data} cm</h1>
     <div class="progress">
     <div class="progress-bar" role="progressbar" style=" width: ${numero}%;" aria-valuenow="${numero}" aria-valuemin="0" aria-valuemax="250">${numero}%</div>
   </div>
     `
})