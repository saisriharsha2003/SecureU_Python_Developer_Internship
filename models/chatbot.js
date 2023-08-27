const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user'); // 
const Conversation = require('./conversation'); 
const Chatbot = sequelize.define('Chatbot', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  
});

Chatbot.belongsTo(User); 
Chatbot.hasMany(Conversation); 
module.exports = Chatbot;
