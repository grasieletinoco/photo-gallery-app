const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');


const Photo = sequelize.define('Photo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'photos',
});

module.exports = Photo;
