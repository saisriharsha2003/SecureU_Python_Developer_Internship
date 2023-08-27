const { Sequelize } = require('sequelize');

// Set up your database connection
const sequelize = new Sequelize({
  dialect: 'sqlite', // You can change this to another database dialect if needed
  storage: 'path/to/your/database.sqlite', // Specify the path to your SQLite database file
  logging: false, // Disable logging SQL queries (optional)
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
