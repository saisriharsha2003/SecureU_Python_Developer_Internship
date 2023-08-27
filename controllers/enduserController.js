const EndUser = require('../models/enduser');

exports.createEndUser = async (req, res) => {
  try {
    const newEndUser = await EndUser.create(req.body);
    res.status(201).json(newEndUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.listEndUsers = async (req, res) => {
  try {
    const endUsers = await EndUser.findAll();
    res.status(200).json(endUsers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getEndUser = async (req, res) => {
  try {
    const endUser = await EndUser.findByPk(req.params.endUserId);
    if (!endUser) {
      res.status(404).json({ error: 'End user not found' });
      return;
    }
    res.status(200).json(endUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.updateEndUser = async (req, res) => {
  try {
    const endUser = await EndUser.findByPk(req.params.endUserId);
    if (!endUser) {
      res.status(404).json({ error: 'End user not found' });
      return;
    }
    // Update end user attributes here
    await endUser.update(req.body);
    res.status(200).json(endUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.deleteEndUser = async (req, res) => {
  try {
    const endUser = await EndUser.findByPk(req.params.endUserId);
    if (!endUser) {
      res.status(404).json({ error: 'End user not found' });
      return;
    }
    await endUser.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
