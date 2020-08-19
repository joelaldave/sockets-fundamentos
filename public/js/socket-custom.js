var socket = io();

socket.on('connect', function () {

    console.log(`Conectado al servidor`);

});
// escuchar sucesos
socket.on('disconnect', function () {
    
    console.log('Perdimos Coneccion con el servidor')

})
// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Joel Aldave',
    mensaje: 'Hola socket'
}, function( resp ) {
    console.log('respuesta server:', resp);
});

// escuchar informacion

socket.on('enviarMensaje', function( resp ) {
    console.log('Servidor: ', resp);
})