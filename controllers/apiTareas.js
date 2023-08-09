const db = require('../models')
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

let apiTareas = {
    lista: async (req, res) =>{
    Array.from(await db.Tarea.findAll()).map(datos =>{
                
                res.json({
                    id: datos.id,
                    materia: datos.materia,
                    contenido: datos.contenido,
                    fecha: datos.fecha
                })
            })
    }
}
module.exports = apiTareas;