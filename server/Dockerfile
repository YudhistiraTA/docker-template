# Use a base image
FROM node:16-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files and install ALL dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Compile TypeScript
RUN npx tsc

# Create a production-only dependency layer
FROM node:16-alpine

WORKDIR /app

# Copy only production dependencies and compiled JS from previous stage
COPY --from=builder /app/package*.json ./
ENV PORT=8000
RUN npm install --only=production

COPY --from=builder /app/dist ./dist

# Explicitly copy the prisma directory
COPY --from=builder /app/prisma ./prisma

# Run the Express server from the compiled output
ENTRYPOINT npx prisma generate && \
  npx prisma db push && \
  npm run seed &&\
  npm run start