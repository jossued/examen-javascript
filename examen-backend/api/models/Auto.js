/**
 * Auto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    chasis: {
      type: 'number',
      columnType: 'int'
    },
    nombreMarca:{
      type: 'string'
    },
    colorUno:{
      type: 'string'
    },
    colorDos:{
      type: 'string'
    },
    nombreModelo:{
      type: 'string'
    },
    anio:{
      type: 'number',
      columnType: 'int'
    },
    idConductor:{
      model: 'Conductor'
    },
    eventosPorAuto:{
      collection: 'EventoPorAuto',
      via: 'idAuto'
    }


  },

};

