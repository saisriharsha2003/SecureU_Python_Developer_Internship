const express = require('express');
const router = express.Router();
const ChatbotController = require('../controllers/chatbotController');

router.post('/:userId/chatbots', ChatbotController.createChatbot);
router.get('/:userId/chatbots', ChatbotController.listChatbots);
router.get('/:chatbotId', ChatbotController.getChatbot);
router.put('/:chatbotId', ChatbotController.updateChatbot);
router.delete('/:chatbotId', ChatbotController.deleteChatbot);

module.exports = router;
