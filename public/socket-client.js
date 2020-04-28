const socket = io('http://localhost:3000/');

if (socket) {
    console.log('estoy conectado al socket del servidor');
    
}
 /* esto es lo que me permite mostrar los datos en centimetros de mi tarjeta */

let monitor = document.getElementById('monitor')
socket.on('datos-proximity', (data) =>{
    let numero = Number(data)
    if(data < 5){
        console.log('wow hay mucha agua');
    }
     monitor.innerHTML = `
     <h1>${data} cm</h1> 
     `
})

