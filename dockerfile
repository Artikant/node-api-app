# Use official Node.js image as base
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Expose port (if your app listens on 3000)
EXPOSE 3000

# Command to run the app
CMD ["node", "src/server.js"]
