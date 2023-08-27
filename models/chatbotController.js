const Chatbot = require('../models/chatbot');

exports.createChatbot = async (req, res) => {
  try {
   
    const newChatbot = await Chatbot.create({
      UserId: req.params.userId,
      name: req.body.name,
      description: req.body.description,
      isActive: true, 
    });

    res.status(201).json(newChatbot);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getAllChatbots = async (req, res) => {
  try {
    const userId = req.params.userId;
    const chatbots = await Chatbot.findAll({
      where: { UserId: userId },
      attributes: ['id', 'name', 'description'], 
    });

    res.status(200).json(chatbots);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};


