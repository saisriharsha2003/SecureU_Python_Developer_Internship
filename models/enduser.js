const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const EndUser = sequelize.define('EndUser', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

EndUser.hasMany(Conversation);
module.exports = EndUser;
