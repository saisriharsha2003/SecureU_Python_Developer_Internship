const Conversation = require('../models/conversation');

exports.startConversation = async (req, res) => {
  try {
    const newConversation = await Conversation.create({
      ChatbotId: req.params.chatbotId,
      EndUserId: req.body.endUserId, // Assuming you send this in the request body
      // Other attributes
    });
    res.status(201).json(newConversation);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.listConversations = async (req, res) => {
  try {
    const conversations = await Conversation.findAll({
      where: { ChatbotId: req.params.chatbotId },
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findByPk(req.params.conversationId);
    if (!conversation) {
      res.status(404).json({ error: 'Conversation not found' });
      return;
    }
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.updateConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findByPk(req.params.conversationId);
    if (!conversation) {
      res.status(404).json({ error: 'Conversation not found' });
      return;
    }
    // Update conversation attributes here
    await conversation.update(req.body);
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.deleteConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findByPk(req.params.conversationId);
    if (!conversation) {
      res.status(404).json({ error: 'Conversation not found' });
      return;
    }
    await conversation.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
