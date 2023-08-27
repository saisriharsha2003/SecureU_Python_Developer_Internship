const express = require('express');
const router = express.Router();
const ConversationController = require('../controllers/conversationController');

router.post('/:chatbotId/conversations', ConversationController.startConversation);
router.get('/:chatbotId/conversations', ConversationController.listConversations);
router.get('/:conversationId', ConversationController.getConversation);
router.put('/:conversationId', ConversationController.updateConversation);
router.delete('/:conversationId', ConversationController.deleteConversation);

module.exports = router;
