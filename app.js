const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log( argv);


crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => {
        console.log(`${nombreArchivo} creado`);  
    })
    .catch(err => {
        console.log(`Algo salió mal`);
        console.log(err)
    });





