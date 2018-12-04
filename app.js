const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let opc = argv._[0];

switch (opc) {

    case 'crear':
        let tarea = porHacer.Crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==========Por hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Tarea actualizada'.green);
        } else {
            console.log('No se pudo actualizar la tarea'.red);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('error');
}