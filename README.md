# Voice Translation API

This service provides a webhook for Twilio voice calls and responds with a `<Start><Stream>` TwiML directive to stream audio to a live translator WebSocket server.

## Features

- Responds to Twilio's `/voice` webhook
- Sends `<Start><Stream>` TwiML response to Twilio
- Supports a configurable WebSocket media stream target

## Endpoints

- `GET /` – Health check (`Voice Webhook API is running!`)
- `POST /voice` – Twilio will hit this endpoint for incoming voice calls

## Setup

### 1. Install Dependencies

```bash
npm install
