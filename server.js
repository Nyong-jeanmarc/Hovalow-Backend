const express = require('express');
const app = express();
const { createSessionController } = require('./sessions.controller');

app.use(express.json());

app.post('/api/sessions', createSessionController);

const port = 3000;
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});