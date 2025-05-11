{
  "name": "voice-translator-server",
  "version": "1.0.0",
  "description": "WebSocket server for real-time voice translation using Twilio and OpenAI Whisper.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "openai": "^4.0.0",
    "ws": "^8.13.0",
    "express": "^4.18.2",
    "dotenv": "^16.3.1"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "license": "MIT"
}
