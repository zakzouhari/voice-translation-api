# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package and install deps
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 8080

# Start the app
CMD ["node", "voice-webhook.js"]
