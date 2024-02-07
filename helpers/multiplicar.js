const fs = require('fs');
const colors = require('@colors/colors');



const crearArchivoTabla = async(base = 1, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            let resultado = base * index;
            salida += `${base} x ${index} = ${resultado} \n`;
            consola += `${base} ${'x'.yellow} ${index} ${'='.yellow} ${resultado} \n`;
        }
        
        if (listar) {
            console.log(colors.red('============='));
            console.log(` Tabla del ${colors.cyan(base)} `.bgMagenta);
            console.log(colors.red('============='));
            console.log(consola);

        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
        return `Tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }

}



// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log('Archivo creado');
    
// })

module.exports = {
    crearArchivoTabla
}