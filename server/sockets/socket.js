// importando objeto de la carpeta server
const { io } = require('../server');

/* Saber cuando un usuario se conecta al server */
io.on('connection', (client) => {

    /* socket io me permite especificar un parametro como segundo arg que es el cliente, este objeto contiene
    toda la info de la computadora o la conexion que se establecio */
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administradorshshdsi',
        mnsj: 'Bienvenido '
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado')
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

    });


});