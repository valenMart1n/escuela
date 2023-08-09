const db = require('../models')
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

let apiTareas = {
    lista: async (req, res) =>{
        res.json(
            {cantidad: await db.Tarea.count(),
            tareas: resultado = Array.from(await db.Tarea.findAll()).map(function(datos){
                return {
                    id: datos.id,
                    materia: datos.materia,
                    contenido: datos.contenido,
                    fecha: datos.fecha
                    }
            
            })
        }
            )
    }
}
module.exports = apiTareas;