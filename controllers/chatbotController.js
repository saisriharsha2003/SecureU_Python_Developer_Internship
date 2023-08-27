const Chatbot = require('../models/chatbot');

exports.createChatbot = async (req, res) => {
  try {
    const newChatbot = await Chatbot.create({
      UserId: req.params.userId,
      
    });
    res.status(201).json(newChatbot);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.listChatbots = async (req, res) => {
  try {
    const chatbots = await Chatbot.findAll({
      where: { UserId: req.params.userId },
    });
    res.status(200).json(chatbots);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getChatbot = async (req, res) => {
  try {
    const chatbotId = req.params.chatbotId;
    const chatbot = await Chatbot.findByPk(chatbotId);
    if (!chatbot) {
      res.status(404).json({ error: 'Chatbot not found' });
      return;
    }
    res.status(200).json(chatbot);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.updateChatbot = async (req, res) => {
  try {
    const chatbotId = req.params.chatbotId; 
    if (!chatbot) {
      res.status(404).json({ error: 'Chatbot not found' });
      return;
    }

    await chatbot.save();

    res.status(200).json(chatbot);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.deleteChatbot = async (req, res) => {
  try {
    const chatbotId = req.params.chatbotId; 
    const chatbot = await Chatbot.findByPk(chatbotId);
    if (!chatbot) {
      res.status(404).json({ error: 'Chatbot not found' });
      return;
    }

    await chatbot.destroy();
    res.status(204).json(); 
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
