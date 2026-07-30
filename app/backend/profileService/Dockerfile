# Use Node.js 22 LTS Alpine image
FROM node:22-alpine

# Create application directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose application port
EXPOSE 3002

# Start the application
CMD ["node", "index.js"]