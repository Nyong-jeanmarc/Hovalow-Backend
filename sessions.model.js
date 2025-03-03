const pool = require('./database');
const { v4: uuidv4 } = require('uuid');

const createSession = async () => {
  const sessionId = uuidv4();
  const currentTime = new Date();
  const query = {
    text: `INSERT INTO session (session_id, start_time, last_activity_time, status) VALUES ($1, $2, $3, $4) RETURNING *`,
    values: [sessionId, currentTime, currentTime, 'active'],
  };
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating session:', error.message);
    throw error;
  }
};

module.exports = { createSession };