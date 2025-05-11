# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your server listens on (adjust if different)
EXPOSE 8080

# Default command to run your server
CMD ["node", "server.js"]
