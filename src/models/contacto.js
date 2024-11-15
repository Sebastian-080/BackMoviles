  
const { DataTypes } = require('sequelize');
const sequelize = require('../util/db');

const Contacto = sequelize.define('contacto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  tableName: 'contacto', // Especifica el nombre exacto de la tabla
  timestamps: false   // Desactiva createdAt y updatedAt ya que son agregados automaticamente por el ORM
});

module.exports = Contacto;
