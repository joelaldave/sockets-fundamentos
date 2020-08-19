const { io } = require('../server');

io.on('connection', (client) =>{
    console.log('Usuario CONECTADO');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    })

    client.on('disconnect', () => {

        console.log('USUARIO DESCONECTADO')

    });

    //escuchar el cliente

    client.on('enviarMensaje', (data, callback) =>{

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

       /*  if (data.usuario) {
            callback({
                resp: 'TOLDO SALIO BIEN!!!'
            });
        }else{
            callback({
                resp: 'TOLDO SALIO MAL!!!'
            });
        }
         */

    });

    
})