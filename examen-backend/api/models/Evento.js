/**
 * Evento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string',
      required: true
    },
    fecha:{
      type: 'string',
      columnType: 'date'
    },
    latitud:{
      type: 'number',
      columnType: 'float'
    },
    longitud:{
      type: 'number',
      columnType: 'float'
    },
    eventosPorAuto: {
      collection: 'EventoPorAuto',
      via: 'idEvento'
    }
  },

};

