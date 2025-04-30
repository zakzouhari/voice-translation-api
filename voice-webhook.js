// voice-webhook.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

// Respond to Twilio with TwiML <Start><Stream>
app.post('/voice', (req, res) => {
  const response = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Start>
    <Stream url="wss://YOUR-WEBSOCKET-URL-HERE/media" />
  </Start>
  <Say>Welcome to the live translator. Please begin speaking.</Say>
  <Pause length="60"/>
</Response>`;

  res.set('Content-Type', 'text/xml');
  res.send(response);
});

app.listen(port, () => {
  console.log(`Voice webhook server running on port ${port}`);
});
