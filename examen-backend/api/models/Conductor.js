/**
 * Conductor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres: {
      type: 'string'
    },
    apellidos: {
      type: 'string'
    },
    fechaNacimiento: {
      type: 'string',
      columnType: 'date'
    },
    numeroAutos: {
      type: 'number',
      columnType: 'int'
    },
    licenciaValida: {
      type: 'boolean'
    },
    idUsuario:{
      model: 'Usuario'
    },
    autos: {
      collection: 'Auto',
      via: 'idConductor'
    }
  },

};

