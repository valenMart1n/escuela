module.exports = (sequelize, dataTypes) => {
    let alias = 'Tarea';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        materia: {
            type: dataTypes.STRING
        },
        contenido: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'tareas',
        timestamps: false
    };
    const Tarea = sequelize.define(alias, cols, config)

    return Tarea;
}