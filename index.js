const Serialport = require('serialport');
const express = require('express')
const app = express();
const Readline = Serialport.parsers.Readline;

//configuracion de archivos estaticos
app.use(express.static(__dirname + '/public'));

//inicializando el servidor de express js
const server = app.listen(3000, ()=> console.log('conectado correctamente en el puerto 3000'))

//inicializando socket.io
const socket = require('socket.io');
const io = socket(server)

//evento de conexion de conexion al websocket
io.on('connect', ()=> console.log('usuario nuevo conectado al socket'))


const port = new Serialport('COM3', {
baudRate: 9600
});

const parser = port.pipe(new Readline({delimeter: '\r\n' }));

parser.on('open', function(){
console.log('connection is opened');
});
//mostrar los datos del sensor
parser.on('data', function(data) {
    //console.log(data);
   io.emit('datos-proximity', data)

});
port.on('error', function(err) {
console.log(err);
});
