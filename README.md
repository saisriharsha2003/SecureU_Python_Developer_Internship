# Chatbot Platform API

This is a RESTful API built using Express.js, SQLite, and Sequelize ORM. The API serves as the backend for a platform where users can create chatbots and have conversations with end users.

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/chatbot-platform-api.git


1. Install dependencies
cd chatbot-platform-api
npm install
 
2. Configure database Connections

Edit the db.js file to set up your database connection details. Make sure you have SQLite installed and specify the path to your SQLite database file.

3. Start server
npm start

The server will start on port 3000 by default. You can configure the port in the app.js file.

API Endpoints
Users
POST /users - Create a new user
GET /users - List all users
GET /users/:id - Retrieve a single user
PUT /users/:id - Update a user
DELETE /users/:id - Delete a user
Chatbots
POST /users/:userId/chatbots - Create a new chatbot for a user
GET /users/:userId/chatbots - List all chatbots for a user
GET /chatbots/:chatbotId - Retrieve a single chatbot
PUT /chatbots/:chatbotId - Update a chatbot
DELETE /chatbots/:chatbotId - Delete a chatbot
Conversations
POST /chatbots/:chatbotId/conversations - Start a new conversation for a chatbot
GET /chatbots/:chatbotId/conversations - List all conversations for a chatbot
GET /conversations/:conversationId - Retrieve a single conversation
PUT /conversations/:conversationId - Update a conversation
DELETE /conversations/:conversationId - End/delete a conversation
EndUsers
POST /endusers - Register a new end user
GET /endusers - List all end users
GET /endusers/:endUserId - Retrieve details of a single end user
PUT /endusers/:endUserId - Update end user details
DELETE /endusers/:endUserId - Delete an end user
Postman Collection
You can import the provided Postman collection (Chatbot_Platform_API.postman_collection.json) to test the API endpoints.

License
This project is licensed under the MIT License - see the LICENSE file for details.
