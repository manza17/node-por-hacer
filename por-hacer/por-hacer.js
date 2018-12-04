const fs = require('fs');

let tareasPorHacer = [];

const cargarDB = () => {
    try {
        tareasPorHacer = require('../data-base/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const guardarDB = () => {

    let data = JSON.stringify(tareasPorHacer);

    fs.writeFile('data-base/data.json', data, (err) => {
        if (err) throw err;
    });
}

const Crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    tareasPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return tareasPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    const index = tareasPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    const index = tareasPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer.splice(index, 1);;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    Crear,
    getListado,
    actualizar,
    borrar
}