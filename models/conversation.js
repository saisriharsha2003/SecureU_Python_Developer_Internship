const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Chatbot = require('./chatbot'); 
const EndUser = require('./enduser'); 
const Conversation = sequelize.define('Conversation', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
 
});

Conversation.belongsTo(Chatbot); 
Conversation.belongsTo(EndUser); 

module.exports = Conversation;
