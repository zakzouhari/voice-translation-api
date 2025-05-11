// server.js

require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected.');

  ws.on('message', async (message) => {
    console.log('Received:', message);

    // Example: Echo the message back (replace this with OpenAI Whisper logic)
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected.');
  });
});

app.get('/', (req, res) => {
  res.send('Voice Translator Server is running');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
