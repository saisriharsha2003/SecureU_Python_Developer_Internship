const express = require('express');
const app = express();

// Import your routes
const usersRoutes = require('./routes/users');
const chatbotsRoutes = require('./routes/chatbots');
const conversationsRoutes = require('./routes/conversations');
const endUsersRoutes = require('./routes/endusers');

// Use your routes
app.use('/users', usersRoutes);
app.use('/users/:userId/chatbots', chatbotsRoutes); // This route will be like /users/:userId/chatbots
app.use('/chatbots/:chatbotId/conversations', conversationsRoutes); // This route will be like /chatbots/:chatbotId/conversations
app.use('/endusers', endUsersRoutes);

// ...other middleware and configurations

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
