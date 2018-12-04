const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    }).help().argv;

module.exports = {
    argv
}