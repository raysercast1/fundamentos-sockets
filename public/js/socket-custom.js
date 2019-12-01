/*Vamos a definir las funciones que queremos se ejecuten cuando recibamos info del server o cuando
    enviemos info al server*/


// io(); aparece porque importamos la libreria socket previamente.
let socket = io();

//indicando cuando tengo un canal de comunicacion abierta entre servidor/cliente.
// on es para escuchar eventos
socket.on('connect', function() {
    console.log('conectado al servidor');
});

// funcion que se ejecuta cuando perdemos conexion con el server.
socket.on('disconnect', function() {
    console.log('disconnect');
});

//Emitir desde cliente - escuchar en el servidor
// .emit es enviar info
// lo mas comun en el segundo parametro es enviar un objeto
socket.emit('enviarMensaje', {
    nombre: 'rayser',
    mnsj: 'Hola mundo'
}, function(obj) {
    console.log('respuesta del server:', obj)
});

socket.on('enviarMensaje', function(obj) {
    console.log(obj);
});