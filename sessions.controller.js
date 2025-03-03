const { createSession } = require('./sessions.model');

const createSessionController = async (req, res) => {
  try {
    const newSession = await createSession();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: 'Error creating session' });
  }
};

module.exports = { createSessionController };