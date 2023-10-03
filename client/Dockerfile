# Use a base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . ./

# Build the app
RUN npm run build

# Serve the app (using serve or any static server)
RUN npm install -g serve

# Copy the entrypoint script and set it as the entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh  # Ensure the script is executable
ENTRYPOINT ["/entrypoint.sh"]
