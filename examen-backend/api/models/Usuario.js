/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'string',
      required: true
    },
    conductores: {
      collection: 'Conductor',
      via: 'idUsuario'
    },
    rolesPorUsuario: {
      collection: 'RolesPorUsuario',
      via: 'idUsuario'
    }

  },

};

