const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Respond to Twilio with TwiML <Start><Stream>
app.post('/voice', (req, res) => {
  const response = `
    <Response>
      <Start>
        <Stream url="wss://exemplary-strength-production-c441.up.railway.app/media-stream"/>
      </Start>
      <Say>Welcome to the live translator. Please begin speaking.</Say>
      <Pause length="60"/>
    </Response>
  `;
  res.set('Content-Type', 'text/xml');
  res.send(response);
});

// Start server
app.listen(port, () => {
  console.log(`Voice webhook server running on port ${port}`);
});
